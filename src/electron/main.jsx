const { app, BrowserWindow, Menu, powerSaveBlocker } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
let pool;

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
    import('../postgres/base.js').then(({ default: connectDatabase }) => {
        pool = connectDatabase();
        createWindow();
    }).catch(error => {
        console.error(error);
    });
});

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
    pool.end()
        .then(() => {
            console.log('Connection pool closed successfully');
        })
        .catch((err) => {
            console.error('Error closing connection pool:', err);
        });
});