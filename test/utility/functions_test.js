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
        expect(factorial(undefined)).to.equal(null);
    });
    
  });
  
});
