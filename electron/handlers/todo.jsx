const todoHandlers = {
    createTodo: (event, args) => {
        // do block 
        event.sender.send('createTodo', 'createTodo');
    },
    updateTodo: (event, args) => {
        // do block 
        event.sender.send('updateTodo', 'updateTodo');
    },
    deleteTodo: (event, args) => {
        // do block 
        event.sender.send('deleteTodo', 'deleteTodo');
    }
}

module.exports = {
    todoHandlers
};