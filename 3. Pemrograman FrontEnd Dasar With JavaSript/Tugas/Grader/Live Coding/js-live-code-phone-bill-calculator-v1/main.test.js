const { expect, describe, it } = require('@jest/globals');
const { phoneBillCalculator, calcByMoney, calcByTime } = require('./main');

describe('test calcByMoney function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(calcByMoney(1000)).not.toBeNull();
      expect(calcByMoney(200)).not.toBeNull();
      expect(typeof calcByMoney(1000)).toBe('string');
      expect(typeof calcByMoney(200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string when have sufficient money', () => {
      expect(calcByMoney(750)).toBe('Cukup untuk melakukan panggilan selama 1 menit, uang habis.');
      expect(calcByMoney(1500)).toBe('Cukup untuk melakukan panggilan selama 2 menit, uang habis.');
      expect(calcByMoney(2000)).toBe('Cukup untuk melakukan panggilan selama 2 menit, sisa uang 500.');
      expect(calcByMoney(3000)).toBe('Cukup untuk melakukan panggilan selama 4 menit, sisa uang 250.');
      expect(calcByMoney(4000)).toBe('Cukup untuk melakukan panggilan selama 6 menit, sisa uang 250.');
      expect(calcByMoney(5000)).toBe('Cukup untuk melakukan panggilan selama 8 menit, sisa uang 250.');
      expect(calcByMoney(10000)).toBe('Cukup untuk melakukan panggilan selama 18 menit, sisa uang 250.');
      expect(calcByMoney(15000)).toBe('Cukup untuk melakukan panggilan selama 28 menit, sisa uang 250.');
      expect(calcByMoney(15700)).toBe('Cukup untuk melakukan panggilan selama 29 menit, sisa uang 450.');
    });

    it('should return correct string when have insufficient money', () => {
      expect(calcByMoney(0)).toBe('Uang sebesar 0 tidak cukup untuk melakukan panggilan.');
      expect(calcByMoney(500)).toBe('Uang sebesar 500 tidak cukup untuk melakukan panggilan.');
      expect(calcByMoney(100)).toBe('Uang sebesar 100 tidak cukup untuk melakukan panggilan.');
      expect(calcByMoney(1)).toBe('Uang sebesar 1 tidak cukup untuk melakukan panggilan.');
    });
  });
});

describe('test calcByTime function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(calcByTime(10)).not.toBeNull();
      expect(calcByTime(200)).not.toBeNull();
      expect(typeof calcByTime(10)).toBe('string');
      expect(typeof calcByTime(200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string', () => {
      expect(calcByTime(0)).toBe('Uang yang dibutuhkan untuk melakukan panggilan selama 0 menit adalah 0.');
      expect(calcByTime(1)).toBe('Uang yang dibutuhkan untuk melakukan panggilan selama 1 menit adalah 750.');
      expect(calcByTime(3)).toBe('Uang yang dibutuhkan untuk melakukan panggilan selama 3 menit adalah 2250.');
      expect(calcByTime(4)).toBe('Uang yang dibutuhkan untuk melakukan panggilan selama 4 menit adalah 2750.');
      expect(calcByTime(10)).toBe('Uang yang dibutuhkan untuk melakukan panggilan selama 10 menit adalah 5750.');
      expect(calcByTime(15)).toBe('Uang yang dibutuhkan untuk melakukan panggilan selama 15 menit adalah 8250.');
    });
  });
});

describe('test phoneBillCalculator function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(phoneBillCalculator('time', 10)).not.toBeNull();
      expect(phoneBillCalculator('time', 100)).not.toBeNull();
      expect(phoneBillCalculator('time', 1)).not.toBeNull();
      expect(phoneBillCalculator('money', 2000)).not.toBeNull();
      expect(phoneBillCalculator('money', 200)).not.toBeNull();
      expect(phoneBillCalculator('money', 2500)).not.toBeNull();
      expect(phoneBillCalculator('volue', 2500)).not.toBeNull();
      expect(phoneBillCalculator('coins', 2500)).not.toBeNull();
      expect(typeof phoneBillCalculator('time', 10)).toBe('string');
      expect(typeof phoneBillCalculator('money', 200)).toBe('string');
      expect(typeof phoneBillCalculator('value', 200)).toBe('string');
      expect(typeof phoneBillCalculator('coins', 200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string when input type is time', () => {
      expect(phoneBillCalculator('time', 10)).toBe(
        'Uang yang dibutuhkan untuk melakukan panggilan selama 10 menit adalah 5750.'
      );
      expect(phoneBillCalculator('time', 1)).toBe(
        'Uang yang dibutuhkan untuk melakukan panggilan selama 1 menit adalah 750.'
      );
      expect(phoneBillCalculator('time', 12)).toBe(
        'Uang yang dibutuhkan untuk melakukan panggilan selama 12 menit adalah 6750.'
      );
      expect(phoneBillCalculator('time', 3)).toBe(
        'Uang yang dibutuhkan untuk melakukan panggilan selama 3 menit adalah 2250.'
      );
      expect(phoneBillCalculator('time', 40)).toBe(
        'Uang yang dibutuhkan untuk melakukan panggilan selama 40 menit adalah 20750.'
      );
    });

    it('should return correct string when input type is money', () => {
      expect(phoneBillCalculator('money', 5750)).toBe('Cukup untuk melakukan panggilan selama 10 menit, uang habis.');
      expect(phoneBillCalculator('money', 2750)).toBe('Cukup untuk melakukan panggilan selama 4 menit, uang habis.');
      expect(phoneBillCalculator('money', 15000)).toBe(
        'Cukup untuk melakukan panggilan selama 28 menit, sisa uang 250.'
      );
      expect(phoneBillCalculator('money', 100)).toBe('Uang sebesar 100 tidak cukup untuk melakukan panggilan.');
      expect(phoneBillCalculator('money', 550)).toBe('Uang sebesar 550 tidak cukup untuk melakukan panggilan.');
    });

    it('should return correct string when input type not time/money', () => {
      expect(phoneBillCalculator('value', 5750)).toBe('Invalid Parameter!');
      expect(phoneBillCalculator('coins', 2750)).toBe('Invalid Parameter!');
      expect(phoneBillCalculator('gold', 15000)).toBe('Invalid Parameter!');
    });
  });
});
