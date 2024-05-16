const { expect, describe, it } = require('@jest/globals');
const { findPokemons } = require('./main');

describe('Find Pokemon By Type', () => {
  describe('Find Fire Pokemon', () => {
    const result = findPokemons({ searchBy: 'type', value: 'fire' });

    it('should return 6 pokemons', () => {
      expect(result.length).toEqual(6);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Charizard', 'Rapidash', 'Magmar', 'Growlithe', 'Vulpix', 'Ponyta'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Water Pokemon', () => {
    const result = findPokemons({ searchBy: 'type', value: 'water' });

    it('should return 7 pokemons', () => {
      expect(result.length).toEqual(7);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Gyarados', 'Tentacruel', 'Wingull', 'Squirtle', 'Psyduck', 'Poliwag', 'Mudkip'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Grass Pokemon', () => {
    const result = findPokemons({ searchBy: 'type', value: 'grass' });

    it('should return 7 pokemons', () => {
      expect(result.length).toEqual(7);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Bulbasaur', 'Oddish', 'Bellsprout', 'Chikorita', 'Treecko', 'Turtwig', 'Rowlet'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Electric Pokemon', () => {
    const result = findPokemons({ searchBy: 'type', value: 'electric' });

    it('should return 4 pokemons', () => {
      expect(result.length).toEqual(4);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Pikachu', 'Magnemite', 'Voltorb', 'Chinchou'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Normal Pokemon', () => {
    const result = findPokemons({ searchBy: 'type', value: 'normal' });

    it('should return 0 pokemons', () => {
      expect(result.length).toEqual(0);
    });

    it('should have pokemons name in the list', () => {
      const expected = [];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Find Pokemon By HP', () => {
  describe('Find Pokemon with HP = 35', () => {
    const result = findPokemons({ searchBy: 'hp', value: 35 });

    it('should return 3 pokemons', () => {
      expect(result.length).toEqual(3);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Poliwag', 'Bulbasaur', 'Pikachu'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with HP = 40', () => {
    const result = findPokemons({ searchBy: 'hp', value: 40 });

    it('should return 3 pokemons', () => {
      expect(result.length).toEqual(3);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Vulpix', 'Treecko', 'Voltorb'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with HP = 45', () => {
    const result = findPokemons({ searchBy: 'hp', value: 45 });

    it('should return 4 pokemons', () => {
      expect(result.length).toEqual(4);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Wingull', 'Psyduck', 'Oddish', 'Bellsprout'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with HP = 50', () => {
    const result = findPokemons({ searchBy: 'hp', value: 50 });

    it('should return 3 pokemons', () => {
      expect(result.length).toEqual(3);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Ponyta', 'Squirtle', 'Mudkip'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with HP = 55', () => {
    const result = findPokemons({ searchBy: 'hp', value: 55 });

    it('should return 5 pokemons', () => {
      expect(result.length).toEqual(5);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Magmar', 'Growlithe', 'Chikorita', 'Turtwig', 'Chinchou'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with HP = 60', () => {
    const result = findPokemons({ searchBy: 'hp', value: 60 });

    it('should return 5 pokemons', () => {
      expect(result.length).toEqual(5);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Charizard', 'Gyarados', 'Rapidash', 'Tentacruel', 'Rowlet'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with HP = 65', () => {
    const result = findPokemons({ searchBy: 'hp', value: 65 });

    it('should return 0 pokemons', () => {
      expect(result.length).toEqual(0);
    });

    it('should have pokemons name in the list', () => {
      const expected = [];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Find Pokemon By Attack', () => {
  //  attack range: 45 - 70 (step 5)

  describe('Find Pokemon with Attack = 45', () => {
    const result = findPokemons({ searchBy: 'attack', value: 45 });

    it('should return 5 pokemons', () => {
      expect(result.length).toEqual(5);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Vulpix', 'Squirtle', 'Poliwag', 'Chikorita', 'Treecko'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Attack = 50', () => {
    const result = findPokemons({ searchBy: 'attack', value: 50 });

    it('should return 6 pokemons', () => {
      expect(result.length).toEqual(6);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Wingull', 'Psyduck', 'Mudkip', 'Bulbasaur', 'Oddish', 'Voltorb'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Attack = 55', () => {
    const result = findPokemons({ searchBy: 'attack', value: 55 });

    it('should return 2 pokemons', () => {
      expect(result.length).toEqual(2);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Rowlet', 'Pikachu'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Attack = 60', () => {
    const result = findPokemons({ searchBy: 'attack', value: 60 });

    it('should return 2 pokemons', () => {
      expect(result.length).toEqual(2);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Growlithe', 'Bellsprout'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Attack = 65', () => {
    const result = findPokemons({ searchBy: 'attack', value: 65 });

    it('should return 5 pokemons', () => {
      expect(result.length).toEqual(5);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Magmar', 'Ponyta', 'Rapidash', 'Tentacruel', 'Turtwig'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Attack = 70', () => {
    const result = findPokemons({ searchBy: 'attack', value: 70 });

    it('should return 2 pokemons', () => {
      expect(result.length).toEqual(2);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Charizard', 'Gyarados'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Attack = 75', () => {
    const result = findPokemons({ searchBy: 'attack', value: 75 });

    it('should return 0 pokemons', () => {
      expect(result.length).toEqual(0);
    });

    it('should have pokemons name in the list', () => {
      const expected = [];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Find Pokemon By Defense', () => {
  //   defense range: 40 - 65 (step 5)

  describe('Find Pokemon with Defense = 40', () => {
    const result = findPokemons({ searchBy: 'defense', value: 40 });

    it('should return 4 pokemons', () => {
      expect(result.length).toEqual(4);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Vulpix', 'Poliwag', 'Treecko', 'Pikachu'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Defense = 45', () => {
    const result = findPokemons({ searchBy: 'defense', value: 45 });

    it('should return 5 pokemons', () => {
      expect(result.length).toEqual(5);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Growlithe', 'Psyduck', 'Mudkip', 'Oddish', 'Voltorb'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Defense = 50', () => {
    const result = findPokemons({ searchBy: 'defense', value: 50 });

    it('should return 3 pokemons', () => {
      expect(result.length).toEqual(3);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Rapidash', 'Squirtle', 'Bulbasaur'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Defense = 55', () => {
    const result = findPokemons({ searchBy: 'defense', value: 55 });

    it('should return 3 pokemons', () => {
      expect(result.length).toEqual(3);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Magmar', 'Ponyta', 'Rowlet'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Defense = 60', () => {
    const result = findPokemons({ searchBy: 'defense', value: 60 });

    it('should return 4 pokemons', () => {
      expect(result.length).toEqual(4);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Chikorita', 'Magnemite', 'Tentacruel', 'Turtwig'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Defense = 65', () => {
    const result = findPokemons({ searchBy: 'defense', value: 65 });

    it('should return 2 pokemons', () => {
      expect(result.length).toEqual(2);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Charizard', 'Gyarados'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Find Pokemon with Defense = 70', () => {
    const result = findPokemons({ searchBy: 'defense', value: 70 });

    it('should return 0 pokemons', () => {
      expect(result.length).toEqual(0);
    });

    it('should have pokemons name in the list', () => {
      const expected = [];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});

describe('Find Pokemon By Flying Ability', () => {
  describe('Pokemon Can Fly', () => {
    const result = findPokemons({ searchBy: 'isFlying', value: true });

    it('should return 6 pokemons', () => {
      expect(result.length).toEqual(6);
    });

    it('should have pokemons name in the list', () => {
      const expected = ['Charizard', 'Rapidash', 'Gyarados', 'Tentacruel', 'Wingull', 'Rowlet'];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });

  describe('Pokemon Can Not Fly', () => {
    const result = findPokemons({ searchBy: 'isFlying', value: false });

    it('should return 18 pokemons', () => {
      expect(result.length).toEqual(18);
    });

    it('should have pokemons name in the list', () => {
      const expected = [
        'Magmar',
        'Growlithe',
        'Vulpix',
        'Ponyta',
        'Squirtle',
        'Psyduck',
        'Poliwag',
        'Mudkip',
        'Bulbasaur',
        'Oddish',
        'Bellsprout',
        'Chikorita',
        'Treecko',
        'Turtwig',
        'Pikachu',
        'Magnemite',
        'Voltorb',
        'Chinchou',
      ];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});
