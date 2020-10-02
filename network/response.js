const response = {};

response.success = function(req, res, message, status=200) {
    res.status(status).send({
        error: '',
        body: message,
    });
}

response.error = function(req, res, message, error, status=500) {
    console.log(error.message);
    res.status(status).send({
        error: message,
        body: ''
    });
}

module.exports = response;