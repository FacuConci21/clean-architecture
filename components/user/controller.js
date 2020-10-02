const { response } = require('express');
const store = require('./store');

const controller = {};

controller.addUser = (name) => {
    if (!name) {
        return Promise.reject('Invalid user name.');
    }

    const newUser = {
        name
    }

    return store.addUser(newUser);
}

controller.getUsers = () => {
    try {
        const userList = store.getUsers();

        return Promise.resolve(userList);
    } catch (err) {
        return Promise.reject(err);
    }
}

controller.updateUser = async (id, user) => {
    if (id) {
        try {
            const result = await store.updateUser(id, user);

            return Promise.resolve(result);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    return Promise.reject('No _id given');
}

controller.deleteUser = async (id) => {
    if (id) {
        try {
            const result = store.deleteUser(id);

            return Promise.resolve(result);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    return Promise.reject('No id given.');
}

module.exports = controller;