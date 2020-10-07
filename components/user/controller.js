const { Types } = require('mongoose');
const store = require('./store');

class Controller {
    constructor(id) {
        this._id = id;
    }
    
    static getUsers() {
        try {
            const userList = store.getUsers();

            return Promise.resolve(userList);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    static addUser(name) {
        if (!name) {
            return Promise.reject('Invalid user name.');
        }

        const newUser = {
            name
        }

        return store.addUser(newUser);
    }

    getUser(fill) {
        const user = store.getUser(this._id, fill);
        return Promise.resolve(user);
    }

    updateUser = async (update) => {
        if (update) {
            try {

                const result = await store.updateUser(this._id, update);

                return Promise.resolve(result);
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }

    deleteUser = async () => {
        try {
            const result = store.deleteUser(this._id);

            return Promise.resolve(result);
        } catch (err) {
            return Promise.reject(err);
        }
    }

}// class end

module.exports =  {Controller};