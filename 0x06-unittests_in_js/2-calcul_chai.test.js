const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should return the sum of two rounded numbers', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return the subtraction of two rounded numbers', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return the division of two rounded numbers', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return "Error" if dividing by 0', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
