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

const sortTodos = (array) => {
    const sortedArray = []
    let firstTodo = array.find(todo => todo.previous_todo === 0)
    sortedArray.push(firstTodo)

    const todoObj = {};
    array.forEach(todo => {
        todoObj[todo.id] = todo;
    });

    while (sortedArray.length < array.length){
        let next_todo_id = String(sortedArray[sortedArray.length - 1].next_todo)
        let next_todo = todoObj[next_todo_id]
        sortedArray.push(next_todo) 
    }

    return sortedArray
}

// synchronize the models with the database
sequelize.sync()
const getUsers =async () => {
    let users = await User.findAll({
        attributes: ['id', 'name', 'role']
    })
    const formattedData = users.map(user => user.dataValues)
    return formattedData;
}

const getBoard = async () => {
    let users = await User.findAll({
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
    const formattedData = await users.map(user => {
        const { id, name, role, todos } = user.dataValues;
        let todosData = todos.map(todo => {
            let client = todo.dataValues.ClientModel.dataValues
            todo.dataValues.client = client
            delete todo.dataValues.ClientModel
            return todo.dataValues
        })
        todosData = sortTodos(todosData)
        return {
            user: { id, name, role },
            todos: todosData
        };
    });
    return formattedData
}
console.log(await getBoard())
