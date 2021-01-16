const ProductModel = require('../models/product');

const addNewProduct = async product => {
    return await ProductModel.create(product);
}

module.exports = {
    addNewProduct,
};