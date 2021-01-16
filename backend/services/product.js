const ProductRepository = require('../repositories/product');

const addNewProduct = async (product) => {
    const createdProduct = await ProductRepository.addNewProduct(product);

    return createdProduct;
};


module.exports = {
    addNewProduct
}