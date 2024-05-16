const { expect, describe, it } = require('@jest/globals');
const combineData = require('./main');

describe('Combine Data function', () => {
  describe('Combine Data function not return null', () => {
    it('should return not null', () => {
      expect(combineData('Ruangguru', '2023')).not.toBeNull();
      expect(combineData(2023, 'Ruangguru')).not.toBeNull();
      expect(combineData(2023, 2023)).not.toBeNull();
      expect(combineData(-5, -10)).not.toBeNull();
    });
  });

  describe('Combine Data function return correct value', () => {
    describe('Combine Data function return correct value when parameter 1 and parameter 2 is number', () => {
      it('should return correct value', () => {
        expect(combineData(2023, 2023)).toBe('Parameter Pertama:2023 & Parameter Kedua:2023 - Hasil Proses= 4046');
        expect(combineData(-5, -10)).toBe('Parameter Pertama:-5 & Parameter Kedua:-10 - Hasil Proses= -15');
      });
    });

    describe('Combine Data function return correct value when parameter 1 is not number', () => {
      it('should return correct value', () => {
        expect(combineData('Ruangguru', 2023)).toBe('Invalid Parameter');
        expect(combineData('Ruangguru', -10)).toBe('Invalid Parameter');
        expect(combineData('Ruangguru', 0)).toBe('Invalid Parameter');
      });
    });

    describe('Combine Data function return correct value when parameter 2 is not number', () => {
      it('should return correct value', () => {
        expect(combineData(2023, 'Ruangguru')).toBe('Invalid Parameter');
        expect(combineData(-5, 'Ruangguru')).toBe('Invalid Parameter');
        expect(combineData(0, 'Ruangguru')).toBe('Invalid Parameter');
      });
    });
  });
});
