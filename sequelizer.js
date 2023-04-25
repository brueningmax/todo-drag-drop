import { Sequelize } from "sequelize";
import { UserModel } from './models/user.js'
import { ClientModel } from "./models/client.js";
import { TodoModel } from "./models/todo.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './todos.db',
});

const User = UserModel.init(sequelize);
const Client = ClientModel.init(sequelize);
const Todo = TodoModel.init(sequelize);

TodoModel.associate({ ClientModel, UserModel });
ClientModel.associate({ TodoModel });
UserModel.associate({ TodoModel });

function reorderTodos(todos) {
    const new_list = [];
    const used_ids = new Set();
    while (new_list.length < todos.length) {
      // Find a start-todo with previous_todo value of 0
      const start_todo = todos.find(todo => todo.previous_todo === 0 && !used_ids.has(todo.id));
      used_ids.add(start_todo.id);
      new_list.push(start_todo);
      let next_todo_id = start_todo.next_todo;
      // Add successive todos until next_todo value is 0
      while (next_todo_id !== 0) {
        const next_todo = todos.find(todo => todo.id === next_todo_id && !used_ids.has(todo.id));
        used_ids.add(next_todo.id);
        new_list.push(next_todo);
        next_todo_id = next_todo.next_todo;
      }
    }
    return new_list;
  }

// synchronize the models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        return User.findAll({
            attributes: ['id', 'name', 'role'],
            include: [
                {
                    model: TodoModel,
                    as: 'todos',
                    include: [{ model: ClientModel }],
                },
            ],
            order: [
                Sequelize.literal(`case when UserModel.id = 1 then 1 when UserModel.id = 2 then 3 else 2 end`),
            ],
        })
    })
    .then((users) => {
        const formattedData = users.map(user => {
            const { id, name, role, todos } = user.toJSON();
            const todosData = reorderTodos(todos)
            return {
                user: { id, name, role },
                todos: todosData
            };
        });
        console.log(JSON.stringify(formattedData, null, 2));
    })
    .catch((error) => {
        console.error('Error syncing database', error);
    });