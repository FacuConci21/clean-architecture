const { response } = require('express');
const { Error } = require('mongoose');
const Message = require('./model');

const store = {};

store.addMessage = async (message) => {
    const newMessage = new Message(message);
    await newMessage.save();
};

store.getMessages = (filter) => {
    return new Promise( (resolve, reject) => {
        let customFilter = {}

        if(filter) customFilter = { user: filter };

        Message.find(customFilter)
            .populate('user')
            .populate('chat')
            .exec( (error, populated) => {
                (error)? reject(error) : resolve(populated);
            });
    });
};

store.updateMessage = async (id, message) => {
    const updMessage = await Message.findByIdAndUpdate({
        _id: id
    }, {
        message
    });
    return updMessage;
};

store.delete = async (id) => {
    await Message.findByIdAndDelete({
        _id: id
    });
};

module.exports = store;