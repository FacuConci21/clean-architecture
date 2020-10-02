const controller = require('./controller');
const router = require('express').Router();
const response = require('../../network/response');

router.get('/:id', (req, res) => {
    controller.getChat(req.params.id)
    .then( data => {
        response.success(req, res, data, 200);
    })
    .catch( err => {
        response.error(req, res, 'error while getting a chat.', err);
    });
});

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
    .then( data => {
        response.success(req, res, data, 201);
    })
    .catch( err => {
        response.error(req, res, 'Error while creating a chat', err);
    });
});

module.exports = router;