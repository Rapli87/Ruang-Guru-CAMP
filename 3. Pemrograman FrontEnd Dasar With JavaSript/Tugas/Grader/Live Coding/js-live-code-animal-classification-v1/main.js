const animals = [
  {
    name: "Lion",
    classification: {
      food: "carnivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Shark",
    classification: {
      food: "carnivore",
      type: "fish",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Eagle",
    classification: {
      food: "carnivore",
      type: "bird",
      canFly: true,
      liveInWater: false,
    },
  },
  {
    name: "Pigeon",
    classification: {
      food: "omnivore",
      type: "bird",
      canFly: true,
      liveInWater: false,
    },
  },
  {
    name: "Salmon",
    classification: {
      food: "carnivore",
      type: "fish",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Whale",
    classification: {
      food: "carnivore",
      type: "mammal",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Dolphin",
    classification: {
      food: "carnivore",
      type: "mammal",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Cat",
    classification: {
      food: "carnivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Dog",
    classification: {
      food: "carnivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Cow",
    classification: {
      food: "herbivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Chicken",
    classification: {
      food: "omnivore",
      type: "bird",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Duck",
    classification: {
      food: "omnivore",
      type: "bird",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Penguin",
    classification: {
      food: "carnivore",
      type: "bird",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Seagull",
    classification: {
      food: "omnivore",
      type: "bird",
      canFly: true,
      liveInWater: false,
    },
  },
  {
    name: "Squid",
    classification: {
      food: "carnivore",
      type: "fish",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Octopus",
    classification: {
      food: "carnivore",
      type: "fish",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Goldfish",
    classification: {
      food: "omnivore",
      type: "fish",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Tiger",
    classification: {
      food: "carnivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Lizard",
    classification: {
      food: "carnivore",
      type: "reptile",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Snake",
    classification: {
      food: "carnivore",
      type: "reptile",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Crocodile",
    classification: {
      food: "carnivore",
      type: "reptile",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Alligator",
    classification: {
      food: "carnivore",
      type: "reptile",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Frog",
    classification: {
      food: "carnivore",
      type: "amphibian",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Toad",
    classification: {
      food: "carnivore",
      type: "amphibian",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Salamander",
    classification: {
      food: "carnivore",
      type: "amphibian",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Elephant",
    classification: {
      food: "herbivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Giraffe",
    classification: {
      food: "herbivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
  {
    name: "Hippo",
    classification: {
      food: "herbivore",
      type: "mammal",
      canFly: false,
      liveInWater: true,
    },
  },
  {
    name: "Rhinoceros",
    classification: {
      food: "herbivore",
      type: "mammal",
      canFly: false,
      liveInWater: false,
    },
  },
];

function animalClassification(criteria) {
  return null // TODO: replace this
}

// example test case
// console.log(animalClassification({ classification: 'type', value: 'reptile' })); // ['Lizard', 'Snake', 'Crocodile', 'Alligator']
// console.log(animalClassification({ classification: 'canFly', value: true })); // [ 'Eagle', 'Pigeon', 'Seagull' ]
// console.log(animalClassification({ classification: 'food', value: 'carnivore' })); // ['Lion', 'Shark', 'Eagle','Salmon', 'Whale','Dolphin', 'Cat',  'Dog', 'Penguin', 'Squid', 'Octopus', 'Tiger', 'Lizard','Snake', 'Crocodile', 'Alligator', 'Frog', 'Toad', 'Salamander']
// console.log(animalClassification({ classification: 'liveInWater', value: true })); // [ 'Shark', 'Salmon', 'Whale', 'Dolphin', 'Penguin', 'Squid', 'Octopus', 'Goldfish', 'Crocodile',  'Alligator', 'Frog', 'Toad', 'Salamander', 'Hippo' ]
// console.log(animalClassification({ classification: 'type', value: 'fish' })); // [ 'Shark', 'Salmon', 'Squid', 'Octopus', 'Goldfish' ]

const classification = { classification: 'type', value: 'mammal' }

console.log(animalClassification(classification));

module.exports = { animalClassification };
