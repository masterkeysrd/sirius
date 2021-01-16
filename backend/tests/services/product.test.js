const errors = require('../../core/errors');
const productMocker = require('../mocks/product');
const ProductService = require('../../services/product');
const ProductRepository = require('../../repositories/product');

jest.mock('../../repositories/product');

describe('ProductService', () => {
    it('should create a new product', async () => {
        ProductRepository.addNewProduct.mockImplementation(
            () => Promise.resolve(productMocker.WELL_KNOWN_PRODUCT));

        const createdProduct = await ProductService.addNewProduct(productMocker.WELL_KNOWN_PRODUCT);

        expect(createdProduct).toEqual(productMocker.WELL_KNOWN_PRODUCT);
    });

    it('should thrown creating a empty product', async () => {
        ProductRepository.addNewProduct.mockImplementation(
            () => Promise.reject(new errors.ValidationError(''))
        );
        
        await expect(ProductService.addNewProduct({})).rejects.toThrow('');
    });
});