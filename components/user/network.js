const controller = require('./controller');
const router = require('express').Router();
const response = require('../../network/response');

router.get('/', (req, res) => {
    controller.getUsers()
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req, res, 'Error while getting users.', err);
        });
});

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then( data => {
            response.success(req, res, data, 201);
        })
        .catch( err => {
            response.error(req, res, 'Error while creating user.',err, 500);
        });
});

router.patch('/:id', (req, res) => {
    controller.updateUser(req.params.id, req.body)
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req, res, 'Error while updating user.', err);
        });
});

router.delete('/:id', (req, res) => {
    controller.deleteUser(req.params.id)
        .then( (result) => {
            response.success(req, res, result, 200);
        })
        .catch( (err) => {
            response.error(req, res, 'Error while deleting user.', err);
        });
});

module.exports = router;