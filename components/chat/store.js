const Chat = require('./model');

const store = {};

store.getChat = (id) => {
    return new Promise( async (resolve, reject) => {
        await Chat.findById(id)
        .populate('users')
        .exec( (err, populatedData) => {
            (err)?
                reject(err):
                resolve(populatedData);
        });
    })
    
}

store.addChat = async (chat) => {
    const newChat = new Chat(chat);
    return await newChat.save();
}

module.exports = store;
