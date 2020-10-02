const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chats'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'Users'
    },
    message: {
        type: String, required:true
    },
    filepath: String
},{
    timestamps: true
});

module.exports = mongoose.model('Messages', MessageSchema);