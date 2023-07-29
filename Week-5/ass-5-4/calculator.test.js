const mathOperations = require('./mathOperations');

describe('Math Operations', () => {
  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      expect(mathOperations.sum(2, 3)).toBe(5);
      expect(mathOperations.sum(-5, 10)).toBe(5);
      expect(mathOperations.sum(0, 0)).toBe(0);
    });
  });

  describe('diff', () => {
    it('should return the difference of two numbers', () => {
      expect(mathOperations.diff(5, 2)).toBe(3);
      expect(mathOperations.diff(-10, -5)).toBe(-5);
      expect(mathOperations.diff(5, 5)).toBe(0);
    });
  });

  describe('product', () => {
    it('should return the product of two numbers', () => {
      expect(mathOperations.product(2, 3)).toBe(6);
      expect(mathOperations.product(-5, 10)).toBe(-50);
      expect(mathOperations.product(5, 0)).toBe(0);
    });
  });
});
