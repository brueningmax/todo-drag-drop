import db from './base'

const models = [
    `
      CREATE TABLE IF NOT EXISTS "client" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL,
        "address" TEXT NOT NULL,
        "contact" TEXT NOT NULL
      );`,
    `
      CREATE TABLE IF NOT EXISTS "user" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "role" INTEGER
      );
    `,
    `
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
    `
]

export default async function migrate() {
    models.forEach(model => {
        db.run(model)
    })
}