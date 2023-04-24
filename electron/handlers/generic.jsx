const sqlite3 = require('sqlite3');
const { getAll } = require('./queries/index.jsx')



const genericHandlers = {
    getAllData: async (event, args) => {
        try {
            db = new sqlite3.Database('./todos.db');
            const data = await new Promise((resolve, reject) => {
                db.all(getAll, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        const result = rows.reduce((acc, curr) => {
                            const user = acc[curr.id] || {
                                id: curr.id,
                                name: curr.name,
                                password: curr.password,
                                role: curr.role,
                                todos: []
                            };

                            user.todos.push({
                                id: curr.todo_id,
                                priority: curr.priority,
                                order: curr.order,
                                type: curr.type,
                                timeframe: curr.timeframe,
                                notes: curr.notes,
                                status: curr.status,
                                client: curr.client_id ? {
                                    id: curr.client_id,
                                    name: curr.client_name,
                                    address: curr.client_address,
                                    contact: curr.client_contact
                                } : null,
                                nextTodoId: curr.next_todo_id
                            });

                            acc[curr.id] = user;

                            return acc;
                        }, {});

                        const resultArray = Object.values(result);
                        event.sender.send('getAllData', resultArray);
                    }
                });
            });
        } catch (error) {
            console.error(error);
        } finally {
            db.close();
        }
    },

    deleteAllTodos: (event, args) => {
        // do block 
        event.sender.send('deleteAllTodos', 'deleteAllTodos');
    },

}

module.exports = {
    genericHandlers
};