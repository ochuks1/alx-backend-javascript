const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
            done();
        });
    });

    it('should not resolve if success is false', (done) => {
        const promise = getPaymentTokenFromAPI(false);
        // Assert that the promise does not resolve
        promise.then(() => {
            done(new Error('Promise should not resolve when success is false'));
        }).catch(() => {
            done(); // Test passed as it did not resolve
        });
    });
});
