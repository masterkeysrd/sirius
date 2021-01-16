const app = require('../../app');
const request = require('supertest');
const errors = require('../../core/errors');
const productMocker = require('../mocks/product');
const ProductService = require('../../services/product');

jest.mock('../../services/product');

describe('ProductRouter', () => {
    it('should create a new product for POST /api/products', done => {
        ProductService.addNewProduct.mockImplementation(
            () => Promise.resolve(productMocker.WELL_KNOWN_PRODUCT));

        request(app)
            .post('/api/products')
            .send(productMocker.WELL_KNOWN_PRODUCT)
            .expect('Content-Type', /json/)
            .expect(201)
            .expect(JSON.stringify(productMocker.WELL_KNOWN_PRODUCT), done);
    });

    it('should return a 401 response with empty body for POST /api/products', done => {
        ProductService.addNewProduct.mockImplementation(
            () => Promise.resolve({})
        );
        
        request(app)
            .post('/api/products')
            .send({})
            .expect('Content-Type', /json/)
            .expect(400, done);
    });
});