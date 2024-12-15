const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spy.restore();
    });

    it('should log the correct total for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 120');
    });

    it('should log the correct total for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 20');
    });
});
