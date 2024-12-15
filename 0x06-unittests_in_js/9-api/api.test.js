describe('Cart page', () => {
    it('should respond with status code 200 for numeric id', (done) => {
        request(app)
            .get('/cart/12')
            .expect(200)
            .expect('Payment methods for cart 12', done);
    });

    it('should respond with status code 404 for non-numeric id', (done) => {
        request(app)
            .get('/cart/hello')
            .expect(404, done);
    });
});
