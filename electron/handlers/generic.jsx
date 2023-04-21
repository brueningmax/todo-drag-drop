const sqlite3 = require('sqlite3');



const genericHandlers = {
    getAllData: async (event, args) => {
        const tables = ['user', 'client','todo']
        let results = []
        let data = {}
        try {
            db = await new sqlite3.Database('./todos.db');
            for (let i = 0; i < tables.length; i++) {
                const table = tables[i];
                const rows = await new Promise((resolve, reject) => {
                    db.all(`SELECT * FROM ${table}`, (err, rows) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                        }
                    });
                });
                data[table] = rows;
            }
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            db.close();
            event.sender.send('getAllData', data)
        }

            // db = await new sqlite3.Database('./todos.db');
            // await db.all(`SELECT * FROM ${table}`, async (err, rows) => {
            //     if (err) {
            //         console.error(err.message);
            //     } else {
            //         data[table] = rows
            //         console.log(rows)
            //     }
            //     db.close()
            // })
            // event.sender.send('getAllData', data);
            
            
        // })

            

        // Loop through each table name in the `tables` array
        // console.log(results)
    },
    deleteAllTodos: (event, args) => {
        // do block 
        event.sender.send('deleteAllTodos', 'deleteAllTodos');
    },
}

module.exports = {
    genericHandlers
};