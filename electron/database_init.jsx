const sqlite3 = require('sqlite3');

const setupDB = async (path) => {
  db = new sqlite3.Database(path);
  // Perform database initialization tasks, such as creating tables or setting up initial data
  db.serialize(() => {
    try {
      db.run(`
          CREATE TABLE IF NOT EXISTS "client" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "name" TEXT NOT NULL,
            "address" TEXT NOT NULL,
            "contact" TEXT NOT NULL
          );`);
      db.run(`
          CREATE TABLE IF NOT EXISTS "user" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "name" TEXT NOT NULL,
            "password" TEXT NOT NULL,
            "role" INTEGER
          );
        `);
      db.run(`
          CREATE TABLE IF NOT EXISTS "todo" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "priority" TEXT NOT NULL,
            "order" TEXT NOT NULL,
            "type" TEXT NOT NULL,
            "timeframe" TEXT NOT NULL,
            "notes" TEXT NOT NULL,
            "status" TEXT NOT NULL,
            "user" INTEGER NOT NULL,
            "client" INTEGER NOT NULL,
            CONSTRAINT "fk_todo__client" FOREIGN KEY ("client") REFERENCES "client" ("id") ON DELETE CASCADE,
            CONSTRAINT "fk_todo__user" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE CASCADE
          );
        `)
      // Close the database connection after all operations are completed
    } catch (err) {
      console.error('Error inserting data:', err);
    }

  });
  db.close()

  return db;
}


module.exports = {
  setupDB
};