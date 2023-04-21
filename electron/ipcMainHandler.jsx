const { ipcMain } = require('electron');
const { userHandlers } = require('./handlers/user.jsx')
const { clientHandlers } = require('./handlers/client.jsx')
const { todoHandlers } = require('./handlers/todo.jsx')
const { genericHandlers } = require('./handlers/generic.jsx')


const handlerGroups = [
    genericHandlers,
    // userHandlers,
    // clientHandlers,
    // todoHandlers
]
function createHandlers() {
    handlers = {} 
    handlerGroups.forEach(handler => {
        handlers = Object.assign(handlers, handler)
    }) 
    for (let key in handlers) {
        ipcMain.handle(key, handlers[key]);
    }
}

module.exports = {
    createHandlers
};