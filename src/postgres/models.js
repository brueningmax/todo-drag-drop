export const migration = `
BEGIN;

CREATE TABLE IF NOT EXISTS "client" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "address" TEXT NOT NULL,
  "contact" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "role" INTEGER
);

CREATE TABLE IF NOT EXISTS "todo" (
  "id" SERIAL PRIMARY KEY,
  "priority" TEXT NOT NULL,
  "order" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "timeframe" TEXT NOT NULL,
  "notes" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "user" INTEGER NOT NULL,
  "client" INTEGER NOT NULL,
  CONSTRAINT IF NOT EXISTS "fk_todo__client" FOREIGN KEY ("client") REFERENCES "client" ("id") ON DELETE CASCADE,
  CONSTRAINT IF NOT EXISTS "fk_todo__user" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_todo__client" ON "todo" ("client");
CREATE INDEX IF NOT EXISTS "idx_todo__user" ON "todo" ("user");

COMMIT;
`

