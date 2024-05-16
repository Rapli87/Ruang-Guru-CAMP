const { expect, describe, it } = require('@jest/globals');
const { bulkOrderCalculator, calcByMoney, calcByQuantity } = require('./main');

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
      expect(calcByMoney(750)).toBe('Jumlah barang yang dapat dibeli adalah 1, sisa uang 100!');
      expect(calcByMoney(1500)).toBe('Jumlah barang yang dapat dibeli adalah 2, sisa uang 200!');
      expect(calcByMoney(2000)).toBe('Jumlah barang yang dapat dibeli adalah 3, sisa uang 50!');
      expect(calcByMoney(3000)).toBe('Jumlah barang yang dapat dibeli adalah 4, sisa uang 400!');
      expect(calcByMoney(4000)).toBe('Jumlah barang yang dapat dibeli adalah 6, sisa uang 100!');
      expect(calcByMoney(5000)).toBe('Jumlah barang yang dapat dibeli adalah 7, sisa uang 450!');
      expect(calcByMoney(10000)).toBe('Jumlah barang yang dapat dibeli adalah 15, sisa uang 250!');
      expect(calcByMoney(15000)).toBe('Jumlah barang yang dapat dibeli adalah 23, sisa uang 50!');
      expect(calcByMoney(15700)).toBe('Jumlah barang yang dapat dibeli adalah 24, sisa uang 100!');
    });

    it('should return correct string when have insufficient money', () => {
      expect(calcByMoney(0)).toBe('Uang sebesar 0 tidak cukup untuk membeli barang!');
      expect(calcByMoney(500)).toBe('Uang sebesar 500 tidak cukup untuk membeli barang!');
      expect(calcByMoney(100)).toBe('Uang sebesar 100 tidak cukup untuk membeli barang!');
      expect(calcByMoney(1)).toBe('Uang sebesar 1 tidak cukup untuk membeli barang!');
    });
  });
});

describe('test calcByQuantity function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(calcByQuantity(10)).not.toBeNull();
      expect(calcByQuantity(200)).not.toBeNull();
      expect(typeof calcByQuantity(10)).toBe('string');
      expect(typeof calcByQuantity(200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string', () => {
      expect(calcByQuantity(0)).toBe('Jumlah uang yang harus dibayarkan untuk order 0 adalah 0!');
      expect(calcByQuantity(1)).toBe('Jumlah uang yang harus dibayarkan untuk order 1 adalah 650!');
      expect(calcByQuantity(3)).toBe('Jumlah uang yang harus dibayarkan untuk order 3 adalah 1950!');
      expect(calcByQuantity(4)).toBe('Jumlah uang yang harus dibayarkan untuk order 4 adalah 2600!');
      expect(calcByQuantity(10)).toBe('Jumlah uang yang harus dibayarkan untuk order 10 adalah 6500!');
      expect(calcByQuantity(15)).toBe('Jumlah uang yang harus dibayarkan untuk order 15 adalah 9750!');
    });
  });
});

describe('test bulkOrderCalculator function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(bulkOrderCalculator('quantity', 10)).not.toBeNull();
      expect(bulkOrderCalculator('quantity', 100)).not.toBeNull();
      expect(bulkOrderCalculator('quantity', 1)).not.toBeNull();
      expect(bulkOrderCalculator('money', 2000)).not.toBeNull();
      expect(bulkOrderCalculator('money', 200)).not.toBeNull();
      expect(bulkOrderCalculator('money', 2500)).not.toBeNull();
      expect(bulkOrderCalculator('volue', 2500)).not.toBeNull();
      expect(bulkOrderCalculator('coins', 2500)).not.toBeNull();
      expect(typeof bulkOrderCalculator('quantity', 10)).toBe('string');
      expect(typeof bulkOrderCalculator('money', 200)).toBe('string');
      expect(typeof bulkOrderCalculator('value', 200)).toBe('string');
      expect(typeof bulkOrderCalculator('coins', 200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string when input type is time', () => {
      expect(bulkOrderCalculator('quantity', 10)).toBe(
        'Jumlah uang yang harus dibayarkan untuk order 10 adalah 6500!'
      );
      expect(bulkOrderCalculator('quantity', 1)).toBe(
        'Jumlah uang yang harus dibayarkan untuk order 1 adalah 650!'
      );
      expect(bulkOrderCalculator('quantity', 12)).toBe(
        'Jumlah uang yang harus dibayarkan untuk order 12 adalah 7800!'
      );
      expect(bulkOrderCalculator('quantity', 3)).toBe(
        'Jumlah uang yang harus dibayarkan untuk order 3 adalah 1950!'
      );
      expect(bulkOrderCalculator('quantity', 40)).toBe(
        'Jumlah uang yang harus dibayarkan untuk order 40 adalah 25750!'
      );
    });

    it('should return correct string when input type is money', () => {
      expect(bulkOrderCalculator('money', 5750)).toBe('Jumlah barang yang dapat dibeli adalah 8, sisa uang 550!');
      expect(bulkOrderCalculator('money', 2750)).toBe('Jumlah barang yang dapat dibeli adalah 4, sisa uang 150!');
      expect(bulkOrderCalculator('money', 15000)).toBe(
        'Jumlah barang yang dapat dibeli adalah 23, sisa uang 50!'
      );
      expect(bulkOrderCalculator('money', 100)).toBe('Uang sebesar 100 tidak cukup untuk membeli barang!');
      expect(bulkOrderCalculator('money', 550)).toBe('Uang sebesar 550 tidak cukup untuk membeli barang!');
    });

    it('should return correct string when input type not time/money', () => {
      expect(bulkOrderCalculator('value', 5750)).toBe('Invalid type!');
      expect(bulkOrderCalculator('coins', 2750)).toBe('Invalid type!');
      expect(bulkOrderCalculator('gold', 15000)).toBe('Invalid type!');
    });
  });
});
