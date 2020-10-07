const router = require('express').Router();
const response = require('../../network/response');
const { Controller } = require('./controller');

router.get('/', (req, res) => {
    Controller.getUsers()
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req, res, 'Error while getting users.', err);
        });
});

router.get('/:id', (req, res) => {
    try{
        const userController = new Controller(req.params.id);

        userController.getUser(req.query)
            .then( (user) => {
                response.success(req, res, user, 200);
            });

    }catch (error){
        response.error(req, res, 'Error while getting a user', res.statusCode, error);
    }
    
});

router.post('/', (req, res) => {

    Controller.addUser(req.body.name)
        .then( data => {
            response.success(req, res, data, 201);
        })
        .catch( err => {
            response.error(req, res, 'Error while creating user.',err, 500);
        });
});

router.patch('/:id', (req, res) => {

    const userController = new Controller(req.params.id);
    
    userController.updateUser(req.body)
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req, res, 'Error while updating user.', err);
        });
});

router.delete('/:id', (req, res) => {

    const userController = new Controller(req.params.id);

    userController.deleteUser()
        .then( () => {
            response.success(req, res, 'User deleted.', 200);
        })
        .catch( (err) => {
            response.error(req, res, 'Error while deleting user.', err);
        });
});

module.exports = router;