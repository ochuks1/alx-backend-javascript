// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogStub;

    beforeEach(() => {
        consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        consoleLogStub.restore();
    });

    it('should log the correct total for sendPaymentRequestToApi(100, 20)', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consoleLogStub, 'The total is: 120');
    });

    it('should call Utils.calculateNumber with correct arguments', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
        spy.restore();
    });
});
