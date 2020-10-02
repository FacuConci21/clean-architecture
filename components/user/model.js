const Schema = require('mongoose').Schema;
const model = require('mongoose').model;


const UserSchema = new Schema({
    name: String
},{
    timestamps:true
});

module.exports = model('Users', UserSchema);