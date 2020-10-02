const User = require('./model');

const store = {};

store.addUser = async (user) => {
    const newUser = new User(user);
    return await newUser.save();
}

store.getUsers = async () => {
    const usersList = await User.find();
    return usersList;
}

store.updateUser = async (id, user) => {
    return await User.findByIdAndUpdate(id, user);
}

store.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = store;