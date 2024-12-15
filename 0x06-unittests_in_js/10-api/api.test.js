describe('Available payments', () => {
    it('should return payment methods', (done) => {
        request(app)
            .get('/available_payments')
            .expect(200)
            .expect({
                payment_methods: {
                    credit_cards: true,
                    paypal: false,
                },
            }, done);
    });
});

describe('Login', () => {
    it('should return welcome message', (done) => {
        request(app)
            .post('/login')
            .send({ userName: 'Betty' })
            .expect(200)
            .expect('Welcome Betty', done);
    });
});
