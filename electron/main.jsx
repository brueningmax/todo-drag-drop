const { app, BrowserWindow, Menu, powerSaveBlocker, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { createHandlers } = require('./ipcMainHandler.jsx');
const { setupDB } = require('./database_init.jsx');

let mainWindow;
let db;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false,
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
    mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
    createWindow();
    db = setupDB('./todos.db');
    createHandlers(db)
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


