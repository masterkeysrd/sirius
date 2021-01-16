const { NotFoundError, ValidationError } = require('./errors');

const handler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.status(400);
    }
    if (err instanceof NotFoundError) {
        res.status(404);
    }

    return res.json(err.message);
};

module.exports = handler;