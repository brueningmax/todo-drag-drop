const userHandlers = {
    createUser: (event, args) => {
        // do block 
        event.sender.send('createUser', 'createUser');
    },
    updateUser: (event, args) => {
        // do block 
        event.sender.send('updateUser', 'updateUser');
    },
    deleteUser: (event, args) => {
        // do block 
        event.sender.send('deleteUser', 'deleteUser');
    },
    loginUser: (event, args) => {
        // do block 
        event.sender.send('loginUser', 'loginUser');
    }
}

module.exports = {
    userHandlers
};