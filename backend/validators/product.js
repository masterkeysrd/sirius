const { body } = require('express-validator');

const productValidationRules = () => {
    return [
        body('name').notEmpty(),
        body('name').isLength({min: 5}),
        body('description').notEmpty(),
        body('description').isLength({min: 5}),
    ];
}


module.exports = productValidationRules;