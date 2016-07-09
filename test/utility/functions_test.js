import { expect } from 'chai';

import { factorial, calculate } from '../../src/utility/functions';

describe('utility functions' , () => {

  describe('factorial' , () => {
    
    it('returns correct values for valid inputs', () => {
        expect(factorial(1)).to.equal(1);
        expect(factorial(5)).to.equal(120);
        expect(factorial(500)).to.equal(Infinity);
    });
    
    it('returns null for invalid inputs', () => {
        expect(factorial('1')).to.equal(null);
        expect(factorial('8*')).to.equal(null);
        expect(factorial(undefined)).to.equal(null);
        expect(factorial(null)).to.equal(null);
        expect(factorial('test')).to.equal(null);
    });
    
  });

  describe('calculate' , () => {
    
    it('returns correct values for valid inputs', () => {
        expect(calculate('1 + 1')).to.equal(2);
        expect(calculate('1 + (-1)')).to.equal(0);
        expect(calculate('1 - 1')).to.equal(0);
        expect(calculate('0 - 1')).to.equal(-1);
        expect(calculate('5!')).to.equal(120);
        expect(calculate('10 * 2')).to.equal(20);
        expect(calculate('10 / 2')).to.equal(5);
        expect(calculate('sqrt(4)')).to.equal(2);
        expect(calculate('sqrt( 4)')).to.equal(2);
        expect(calculate('sqrt( 4 )')).to.equal(2);
    });
    
    it('returns null for invalid inputs', () => {
        expect(calculate('seven')).to.equal(null);
        expect(calculate('8*!')).to.equal(null);
        expect(calculate(undefined)).to.equal(null);
        expect(calculate(null)).to.equal(null);
    });
    
  });
  
});
