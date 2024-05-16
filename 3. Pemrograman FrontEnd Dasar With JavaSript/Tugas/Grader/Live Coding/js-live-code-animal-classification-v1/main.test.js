const { expect, describe, it } = require('@jest/globals');
const { animalClassification } = require('./main');

describe('animalClassification', () => {
  describe('test classification by food', () => {
    describe('test carnivore', () => {
      const classification = { classification: 'food', value: 'carnivore' };

      it('should return 19 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(19);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = [
          'Lion',
          'Shark',
          'Eagle',
          'Salmon',
          'Whale',
          'Dolphin',
          'Cat',
          'Dog',
          'Penguin',
          'Squid',
          'Octopus',
          'Tiger',
          'Lizard',
          'Snake',
          'Crocodile',
          'Alligator',
          'Frog',
          'Toad',
          'Salamander',
        ];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test herbivore', () => {
      const classification = { classification: 'food', value: 'herbivore' };

      it('should return 5 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(5);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = ['Cow', 'Elephant', 'Giraffe', 'Hippo', 'Rhinoceros'];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test omnivore', () => {
      const classification = { classification: 'food', value: 'omnivore' };

      it('should return 5 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(5);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = ['Pigeon', 'Chicken', 'Duck', 'Seagull', 'Goldfish'];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });
  });

  describe('test classification by type', () => {
    describe('test reptile', () => {
      const classification = { classification: 'type', value: 'reptile' };

      it('should return 4 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(4);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = ['Lizard', 'Snake', 'Crocodile', 'Alligator'];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test bird', () => {
      const classification = { classification: 'type', value: 'bird' };

      it('should return 6 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(6);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = ['Eagle', 'Pigeon', 'Chicken', 'Duck', 'Penguin', 'Seagull'];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test mammal', () => {
      const classification = { classification: 'type', value: 'mammal' };

      it('should return 11 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(11);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = [
          'Lion',
          'Whale',
          'Dolphin',
          'Cat',
          'Dog',
          'Cow',
          'Tiger',
          'Elephant',
          'Giraffe',
          'Hippo',
          'Rhinoceros',
        ];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test fish', () => {
      const classification = { classification: 'type', value: 'fish' };

      it('should return 5 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(5);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = ['Shark', 'Salmon', 'Squid', 'Octopus', 'Goldfish'];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test amphibian', () => {
      const classification = { classification: 'type', value: 'amphibian' };

      it('should return 3 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(3);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = ['Frog', 'Toad', 'Salamander'];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });
  });

  describe('test classification by habitat', () => {
    describe('test can fly', () => {
      const classification = { classification: 'canFly', value: true };

      it('should return 3 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(3);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = ['Eagle', 'Pigeon', 'Seagull'];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test can not fly', () => {
      const classification = { classification: 'canFly', value: false };

      it('should return 26 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(26);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = [
          'Lion',
          'Shark',
          'Salmon',
          'Whale',
          'Dolphin',
          'Cat',
          'Dog',
          'Cow',
          'Chicken',
          'Duck',
          'Penguin',
          'Squid',
          'Octopus',
          'Goldfish',
          'Tiger',
          'Lizard',
          'Snake',
          'Crocodile',
          'Alligator',
          'Frog',
          'Toad',
          'Salamander',
          'Elephant',
          'Giraffe',
          'Hippo',
          'Rhinoceros',
        ];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test live in water', () => {
      const classification = { classification: 'liveInWater', value: true };

      it('should return 14 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(14);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = [
          'Shark',
          'Salmon',
          'Whale',
          'Dolphin',
          'Penguin',
          'Squid',
          'Octopus',
          'Goldfish',
          'Crocodile',
          'Alligator',
          'Frog',
          'Toad',
          'Salamander',
          'Hippo',
        ];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('test live on land', () => {
      const classification = { classification: 'liveInWater', value: false };

      it('should return 15 animals', () => {
        const result = animalClassification(classification);
        expect(result).toHaveLength(15);
      });

      it('should return animals with name', () => {
        const result = animalClassification(classification);

        const expected = [
          'Lion',
          'Eagle',
          'Pigeon',
          'Cat',
          'Dog',
          'Cow',
          'Chicken',
          'Duck',
          'Seagull',
          'Tiger',
          'Lizard',
          'Snake',
          'Elephant',
          'Giraffe',
          'Rhinoceros',
        ];

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });
  });
});
