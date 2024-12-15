const request = require('supertest');
const app = require('./api');

describe('Index page', () => {
    it('should respond with status code 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('should return correct message', (done) => {
        request(app)
            .get('/')
            .expect('Welcome to the payment system', done);
    });
});
