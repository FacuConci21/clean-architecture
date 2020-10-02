const store = require('./store');

const controller = {};

controller.getChat = (id) => {

    return new Promise((resolve, reject) => {
        if (id) {
            try {
                const result = store.getChat(id);
                resolve(result);
            } catch (error) {
                reject(error);
            };
        }

        reject('No id given');
    });
};

controller.addChat = (users) => {
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            reject('Not enough users.');
        }

        const newChat = {
            users
        }
        resolve(store.addChat(newChat));
    });
};

module.exports = controller;