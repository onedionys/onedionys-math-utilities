const assert = require('assert');
const mathUtils = require('../src/mathUtils');

describe('Math Utilities', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      assert.strictEqual(mathUtils.add(2, 3), 5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      assert.strictEqual(mathUtils.subtract(5, 3), 2);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      assert.strictEqual(mathUtils.multiply(2, 3), 6);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      assert.strictEqual(mathUtils.divide(6, 3), 2);
    });

    it('should return "Error: Division by zero" if dividing by zero', () => {
      assert.strictEqual(mathUtils.divide(6, 0), 'Error: Division by zero');
    });
  });
});
