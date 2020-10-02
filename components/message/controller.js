const { socket } = require('../../socket');
const store = require('./store');

const controller = {};

controller.addMessage = (chat, user, message, file) => {

    return new Promise( (resolve, reject) => {
        if(chat && user && message) {

            let filePath = '';

            if (file) filePath = 'http://localhost:3000/app/files/' + file.filename;

            const fullMessage = {
                chat, user, message, filePath
            };
            store.addMessage(fullMessage);

            socket.io.emit('message', fullMessage);

            resolve(fullMessage);
        }
        else{
            (user)? 
            console.log('[messageController] no message given.'):
            console.log('[messageController] no user given.');
            (chat)?
            console.log('[messageController] no file given.'):
            console.log('[messageController] no chat given.');
            reject ('Datos faltantes.');
        }
    });
};

controller.getMessage = (filter) => {
    return new Promise( (resolve, reject) => {
        try {

            const result = store.getMessages(filter);
            resolve(result);

        } catch (error) {
            reject(error);
        }
        
    });
};

controller.updateMessage = (id, message) => {
    return new Promise( async (resolve, reject) => {
        if (id) {
            const result = await store.updateMessage(id, message);
            resolve(result);
        }else{
            reject('Problem ocurred while updating');
        }
    })
};

controller.deleteMessage = (id) => {
    return new Promise( (resolve, reject) => {
        try{
            if (id) store.delete(id);
            else throw Error('no id given.');
            
            resolve('message deleted');
        }catch( err ){
            reject(err);
        }
    });
};

module.exports = controller;