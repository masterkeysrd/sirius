const errors = require('../../core/errors');
const ProductModel = require('../../models/product');
const productMocker = require('../mocks/product');
const ProductRepository = require('../../repositories/product');

jest.mock('../../models/product');

describe('ProductRepository', () => {
    it('should create a new product', async () => {
        ProductModel.create.mockImplementation(
            () => Promise.resolve(productMocker.WELL_KNOWN_PRODUCT));

        const createdProduct = await ProductRepository.addNewProduct(productMocker.WELL_KNOWN_PRODUCT);

        expect(createdProduct).toEqual(productMocker.WELL_KNOWN_PRODUCT);
    });

    it('should thrown creating a empty product', async () => {
        ProductModel.create.mockImplementation(() => Promise.reject(new errors.ValidationError('')));

        await expect(
            ProductRepository.addNewProduct({})
        ).rejects.toThrow("");
    });
});