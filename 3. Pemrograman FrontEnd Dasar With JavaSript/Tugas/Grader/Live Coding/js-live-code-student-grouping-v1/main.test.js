const { expect, describe, it } = require('@jest/globals');
const { studentGrouping } = require('./main');

describe('Grouping students by age', () => {
  describe('When age is 18', () => {
    const result = studentGrouping({ groupBy: 'age', value: 20 });

    it('should return 7 name', () => {
      expect(result.length).toEqual(7);
    });

    it('should have names in the list', () => {
      const expected = ['Ali', 'Layla', 'Omar', 'Abdullah', 'Mariam', 'Yousef', 'Salem'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When age is 19', () => {
    const result = studentGrouping({ groupBy: 'age', value: 19 });

    it('should return 7 names', () => {
      expect(result.length).toEqual(7);
    });

    it('should have names in the list', () => {
      const expected = ['Mohammed', 'Fatima', 'Hassan', 'Laila', 'Aisha', 'Khalid', 'Rawan'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When age is 20', () => {
    const result = studentGrouping({ groupBy: 'age', value: 20 });

    it('should return 7 names', () => {
      expect(result.length).toEqual(7);
    });

    it('should have names in the list', () => {
      const expected = ['Ali', 'Layla', 'Omar', 'Abdullah', 'Mariam', 'Yousef', 'Salem'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Grouping students by weight', () => {
  describe('When weight is 60', () => {
    const result = studentGrouping({ groupBy: 'weight', value: 60 });
    it('should return 3 names', () => {
      expect(result.length).toEqual(3);
    });

    it('should have names in the list', () => {
      const expected = ['Ahmed', 'Laila', 'Sara'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When weight is 65', () => {
    const result = studentGrouping({ groupBy: 'weight', value: 65 });
    it('should return 2 names', () => {
      expect(result.length).toEqual(2);
    });

    it('should have names in the list', () => {
      const expected = ['Mariam', 'Amina'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When weight is 70', () => {
    const result = studentGrouping({ groupBy: 'weight', value: 70 });
    it('should return 7 names', () => {
      expect(result.length).toEqual(7);
    });

    it('should have names in the list', () => {
      const expected = ['Mohammed', 'Hassan', 'Noura', 'Jawad', 'Khalid', 'Yousef', 'Majid'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When weight is 75', () => {
    const result = studentGrouping({ groupBy: 'weight', value: 75 });
    it('should return 5 names', () => {
      expect(result.length).toEqual(5);
    });

    it('should have names in the list', () => {
      const expected = ['Fatima', 'Aisha', 'Mansour', 'Omar', 'Rawan'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When weight is 80', () => {
    const result = studentGrouping({ groupBy: 'weight', value: 80 });
    it('should return 4 names', () => {
      expect(result.length).toEqual(4);
    });

    it('should have names in the list', () => {
      const expected = ['Ali', 'Layla', 'Abdullah', 'Salem'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Grouping students by height', () => {
  describe('When height is 160', () => {
    const result = studentGrouping({ groupBy: 'height', value: 160 });
    it('should return 2 names', () => {
      expect(result.length).toEqual(2);
    });

    it('should have names in the list', () => {
      const expected = ['Ahmed', 'Sara'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When height is 165', () => {
    const result = studentGrouping({ groupBy: 'height', value: 165 });
    it('should return 4 names', () => {
      expect(result.length).toEqual(4);
    });

    it('should have names in the list', () => {
      const expected = ['Fatima', 'Noura', 'Laila', 'Mariam'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When height is 170', () => {
    const result = studentGrouping({ groupBy: 'height', value: 170 });
    it('should return 6 names', () => {
      expect(result.length).toEqual(6);
    });

    it('should have names in the list', () => {
      const expected = ['Mohammed', 'Layla', 'Abdullah', 'Jawad', 'Amina', 'Majid'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When height is 175', () => {
    const result = studentGrouping({ groupBy: 'height', value: 175 });
    it('should return 5 names', () => {
      expect(result.length).toEqual(5);
    });

    it('should have names in the list', () => {
      const expected = ['Omar', 'Aisha', 'Khalid', 'Yousef', 'Salem'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When height is 180', () => {
    const result = studentGrouping({ groupBy: 'height', value: 180 });
    it('should return 4 names', () => {
      expect(result.length).toEqual(4);
    });

    it('should have names in the list', () => {
      const expected = ['Ali', 'Hassan', 'Mansour', 'Rawan'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Grouping students by hobby', () => {
  describe('When hobby is football', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'football' });
    it('should return 5 students', () => {
      expect(result.length).toEqual(5);
    });

    it('should have names in the list', () => {
      const expected = ['Ahmed', 'Sara', 'Jawad', 'Khalid', 'Salem'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When hobby is swimming', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'swimming' });
    it('should return 5 students', () => {
      expect(result.length).toEqual(5);
    });

    it('should have names in the list', () => {
      const expected = ['Mohammed', 'Fatima', 'Omar', 'Aisha', 'Rawan'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When hobby is reading', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'reading' });
    it('should return 3 students', () => {
      expect(result.length).toEqual(3);
    });

    it('should have names in the list', () => {
      const expected = ['Ali', 'Laila', 'Majid'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When hobby is dancing', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'dancing' });
    it('should return 2 students', () => {
      expect(result.length).toEqual(2);
    });

    it('should have names in the list', () => {
      const expected = ['Layla', 'Yousef'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When hobby is cooking', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'cooking' });
    it('should return 1 student', () => {
      expect(result.length).toEqual(1);
    });

    it('should have names in the list', () => {
      const expected = ['Noura'];
      expect(result).toEqual(expected);
    });
  });

  describe('When hobby is drawing', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'drawing' });
    it('should return 2 students', () => {
      expect(result.length).toEqual(2);
    });

    it('should have names in the list', () => {
      const expected = ['Hassan', 'Mansour'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When hobby is running', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'running' });
    const expected = ['Abdullah', 'Mariam'];

    it('should return an array of length 2', () => {
      expect(result.length).toEqual(2);
    });

    it('should have names in the list', () => {
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When hobby is singing', () => {
    const result = studentGrouping({ groupBy: 'hobby', value: 'singing' });

    it('should return 1 students', () => {
      expect(result.length).toEqual(1);
    });

    it('should have names in the list', () => {
      const expected = ['Amina'];
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Grouping students by favorite food', () => {
  describe('When favorite food is pizza', () => {
    const result = studentGrouping({ groupBy: 'favoriteFood', value: 'pizza' });

    it('should return 3 names', () => {
      expect(result.length).toEqual(3);
    });

    it('should have names in the list', () => {
      const expected = ['Layla', 'Abdullah', 'Khalid'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When favorite food is pasta', () => {
    const result = studentGrouping({ groupBy: 'favoriteFood', value: 'pasta' });

    it('should return 3 names', () => {
      expect(result.length).toEqual(3);
    });

    it('should have names in the list', () => {
      const expected = ['Noura', 'Aisha', 'Majid'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When favorite food is burger', () => {
    const result = studentGrouping({ groupBy: 'favoriteFood', value: 'burger' });

    it('should return 3 names', () => {
      expect(result.length).toEqual(3);
    });

    it('should have names in the list', () => {
      const expected = ['Laila', 'Mariam', 'Salem'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When favorite food is chicken', () => {
    const result = studentGrouping({ groupBy: 'favoriteFood', value: 'chicken' });

    it('should return 2 names', () => {
      expect(result.length).toEqual(2);
    });

    it('should have names in the list', () => {
      const expected = ['Yousef', 'Mansour'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When favorite food is fish', () => {
    const result = studentGrouping({ groupBy: 'favoriteFood', value: 'fish' });

    it('should return 3 names', () => {
      expect(result.length).toEqual(3);
    });

    it('should have names in the list', () => {
      const expected = ['Fatima', 'Omar', 'Rawan'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When favorite food is meat', () => {
    const result = studentGrouping({ groupBy: 'favoriteFood', value: 'meat' });

    it('should return 2 names', () => {
      expect(result.length).toEqual(2);
    });

    it('should have names in the list', () => {
      const expected = ['Jawad', 'Hassan'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('When favorite food is cheese', () => {
    const result = studentGrouping({ groupBy: 'favoriteFood', value: 'cheese' });

    it('should return 1 name', () => {
      expect(result.length).toEqual(1);
    });

    it('should have names in the list', () => {
      const expected = ['Amina'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});
