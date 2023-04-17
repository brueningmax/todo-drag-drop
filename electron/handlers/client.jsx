const clientHandlers = {
    createClient: (event, args) => {
        // do block 
        event.sender.send('createClient', 'createClient');
    },
    updateClient: (event, args) => {
        // do block 
        event.sender.send('updateClient', 'updateClient');
    },
    deleteClient: (event, args) => {
        // do block 
        event.sender.send('deleteClient', 'deleteClient');
    }
}

module.exports = {
    clientHandlers
};