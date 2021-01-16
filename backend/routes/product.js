const express = require('express');
const validators = require('../validators/validators');
const productValidators = require('../validators/product');
const ProductService = require('../services/product');

const router = express.Router();

router.post('/', productValidators(), validators, async (req, res) => {
    const product = req.body;

    const createdProduct = await ProductService.addNewProduct(product);

    res.status(201);
    return res.json(createdProduct);
});


module.exports = router;