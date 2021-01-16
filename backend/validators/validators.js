const { ValidationError } = require('../core/errors');
const { validationResult } = require('express-validator');

const validator = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const mappedErrors = errors.array().map(err => ({
        [err.param]: err.msg
    }));

    throw new ValidationError(mappedErrors);
};

module.exports = validator;