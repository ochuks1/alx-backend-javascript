// 4-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogStub;
    let stub;

    beforeEach(() => {
        consoleLogStub = sinon.stub(console, 'log');
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        consoleLogStub.restore();
        stub.restore();
    });

    it('should log the correct total for sendPaymentRequestToApi', () => {
        // Call the function with sample parameters
        sendPaymentRequestToApi(100, 200);
        
        // Check that the console.log was called with the expected string
        sinon.assert.calledWith(consoleLogStub, 'The total is: 10');
    });
});
