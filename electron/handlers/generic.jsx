const genericHandlers = {
    getDatabase: (event, args) => {
        // do block 
        event.sender.send('getDatabase', 'getDatabase');
    },
    deleteAllTodos: (event, args) => {
        // do block 
        event.sender.send('deleteAllTodos', 'deleteAllTodos');
    },
}

module.exports = {
    genericHandlers
};