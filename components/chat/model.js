const { Schema, model } = require('mongoose');

const ChatSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'Users'
    }]
},{
    timestamps: true
});

module.exports = model('Chats', ChatSchema);