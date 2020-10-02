const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const multer = require('multer');

const router = express.Router();
const upload = multer({
    dest: 'public/send/'
})

router.get('/', (req, res) => {
    const filter = req.query.user;
    controller.getMessage(filter)
        .then( (list)=> {
            response.success(req, res, list);
        })
        .catch( err => {
            response.error(req, res, 'Error while getting messages.', err);
        })
    
});

router.post('/', upload.single('file'), (req, res) => {
    const { chat, user, message } = req.body;
    controller.addMessage(chat, user, message, req.file)
        .then( (fullMessage) => {
            response.success(req, res, fullMessage);
        })
        .catch( (err) => {
            response.error(req, res, 'tuki', err);
        })
});

router.patch('/:id', (req, res) => {
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
    .then( (data) => {
        response.success(req, res, data, 200);
    })
    .catch( err => {
        response.error(req, res, 'Error while updating', 500, err);
    });
});

router.delete('/:id', (req, res) => {
    controller.updateMessage(req.params.id)
    .then( () => {
        response.success(req, res, `message with _id:${req.params.id} deleted`, 200);
    })
    .catch( err => {
        response.error(req, res, 'error while deleting message', err, 500);
    })
});

module.exports = router;