const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('myDatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

export default db;