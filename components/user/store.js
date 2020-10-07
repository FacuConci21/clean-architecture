const User = require('./model');

const store = {};

store.addUser = async (user) => {
    const newUser = new User(user);
    return await newUser.save();
}

store.getUser = async (id, fill) => {
    const user = await User.find({_id: id},fill);
    return user;
}

store.getUsers = async () => {
    const usersList = await User.find();
    return usersList;
}

store.updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { rawResult: true });
}

store.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = store;