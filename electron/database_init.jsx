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
            "type" TEXT NOT NULL,
            "notes" TEXT NOT NULL,
            "status" TEXT NOT NULL,
            "user" INTEGER NOT NULL,
            "client" INTEGER NOT NULL,
            "next_todo" INTEGER,
            "previous_todo" INTEGER,
            "month" TEXT CHECK(month IN ('jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dez')),
            "year" INTEGER,
            CONSTRAINT "fk_todo__client" FOREIGN KEY ("client") REFERENCES "client" ("id") ON DELETE CASCADE,
            CONSTRAINT "fk_todo__user" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE CASCADE,
            CONSTRAINT "fk_todo__next_todo" FOREIGN KEY ("next_todo") REFERENCES "todo" ("id") ON DELETE CASCADE,
            CONSTRAINT "fk_todo__previous_todo" FOREIGN KEY ("previous_todo") REFERENCES "todo" ("id") ON DELETE CASCADE
        );
        `)
      // Close the database connection after all operations are completed
    } catch (err) {
      console.error('Error inserting data:', err);
    }

  });
  db.close()
  db.all('SELECT * FROM user', (err, rows) => {
    console.table(rows)
  })
  db.close()
  return db;
}


module.exports = {
  setupDB
};