const { app, BrowserWindow, Menu, powerSaveBlocker, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const sqlite3 = require('sqlite3');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true // enable Node.js integration in the renderer process
        }
    });

    // Load your React app's index.html file
    mainWindow.loadURL(
        isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    Menu.setApplicationMenu(null);
}

app.on('ready', () => {
    createWindow();
    const db = new sqlite3.Database('./todos.db'); // Example: Creating an in-memory database

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
        } catch (err) {
            console.error('Error inserting data:', err);
        } 

        // Close the database connection after all operations are completed
        db.close((err) => {
            if (err) {
                console.error('Error closing the database:', err);
            } else {
                console.log('Database closed successfully');
            }
        });

        // Handle IPC request from renderer process to send the database instance
        ipcMain.handle('getDatabase', (event) => {
            return db;
        });
    });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('before-quit', async () => {

});