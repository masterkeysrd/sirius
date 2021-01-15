const request = require('supertest');
const app = require('../../app');

describe('IndexRouter', () => {
    it('should response welcome message for GET /api', (done) => {
        request(app)
            .get('/api')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(JSON.stringify('Server is running OK.'), done);
    });
});