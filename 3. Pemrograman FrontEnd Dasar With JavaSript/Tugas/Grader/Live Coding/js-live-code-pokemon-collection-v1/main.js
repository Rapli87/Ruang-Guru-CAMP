const pokemons = [
  {
    name: "Charizard",
    data: {
      type: "fire",
      hp: 60,
      attack: 70,
      defense: 65,
      isFlying: true,
    },
  },
  {
    name: "Rapidash",
    data: {
      type: "fire",
      hp: 60,
      attack: 65,
      defense: 50,
      isFlying: true,
    },
  },
  {
    name: "Magmar",
    data: {
      type: "fire",
      hp: 55,
      attack: 65,
      defense: 55,
      isFlying: false,
    },
  },
  {
    name: "Growlithe",
    data: {
      type: "fire",
      hp: 55,
      attack: 60,
      defense: 45,
      isFlying: false,
    },
  },
  {
    name: "Vulpix",
    data: {
      type: "fire",
      hp: 40,
      attack: 45,
      defense: 40,
      isFlying: false,
    },
  },
  {
    name: "Ponyta",
    data: {
      type: "fire",
      hp: 50,
      attack: 65,
      defense: 55,
      isFlying: false,
    },
  },
  {
    name: "Gyarados",
    data: {
      type: "water",
      hp: 60,
      attack: 70,
      defense: 65,
      isFlying: true,
    },
  },
  {
    name: "Tentacruel",
    data: {
      type: "water",
      hp: 60,
      attack: 65,
      defense: 60,
      isFlying: true,
    },
  },
  {
    name: "Wingull",
    data: {
      type: "water",
      hp: 45,
      attack: 50,
      defense: 35,
      isFlying: true,
    },
  },
  {
    name: "Squirtle",
    data: {
      type: "water",
      hp: 50,
      attack: 45,
      defense: 50,
      isFlying: false,
    },
  },
  {
    name: "Psyduck",
    data: {
      type: "water",
      hp: 45,
      attack: 50,
      defense: 45,
      isFlying: false,
    },
  },
  {
    name: "Poliwag",
    data: {
      type: "water",
      hp: 35,
      attack: 45,
      defense: 40,
      isFlying: false,
    },
  },
  {
    name: "Mudkip",
    data: {
      type: "water",
      hp: 50,
      attack: 50,
      defense: 45,
      isFlying: false,
    },
  },
  {
    name: "Bulbasaur",
    data: {
      type: "grass",
      hp: 35,
      attack: 50,
      defense: 50,
      isFlying: false,
    },
  },
  {
    name: "Oddish",
    data: {
      type: "grass",
      hp: 45,
      attack: 50,
      defense: 45,
      isFlying: false,
    },
  },
  {
    name: "Bellsprout",
    data: {
      type: "grass",
      hp: 45,
      attack: 60,
      defense: 35,
      isFlying: false,
    },
  },
  {
    name: "Chikorita",
    data: {
      type: "grass",
      hp: 55,
      attack: 45,
      defense: 60,
      isFlying: false,
    },
  },
  {
    name: "Treecko",
    data: {
      type: "grass",
      hp: 40,
      attack: 45,
      defense: 40,
      isFlying: false,
    },
  },
  {
    name: "Turtwig",
    data: {
      type: "grass",
      hp: 55,
      attack: 65,
      defense: 60,
      isFlying: false,
    },
  },
  {
    name: "Rowlet",
    data: {
      type: "grass",
      hp: 60,
      attack: 55,
      defense: 55,
      isFlying: true,
    },
  },
  {
    name: "Pikachu",
    data: {
      type: "electric",
      hp: 35,
      attack: 55,
      defense: 40,
      isFlying: false,
    },
  },
  {
    name: "Magnemite",
    data: {
      type: "electric",
      hp: 30,
      attack: 35,
      defense: 60,
      isFlying: false,
    },
  },
  {
    name: "Voltorb",
    data: {
      type: "electric",
      hp: 40,
      attack: 50,
      defense: 45,
      isFlying: false,
    },
  },
  {
    name: "Chinchou",
    data: {
      type: "electric",
      hp: 55,
      attack: 38,
      defense: 48,
      isFlying: false,
    },
  },
];

function findPokemons(criteria) {
  const { searchBy, value } = criteria;
  const pokemonsFound = [];

  pokemons.forEach((pokemon) => {
    if (searchBy === "type") {
      if (pokemon.data.type === value) {
        pokemonsFound.push(pokemon.name);
      }
    } else if (searchBy === "hp") {
      if (pokemon.data.hp === value) {
        pokemonsFound.push(pokemon.name);
      }
    } else if (searchBy === "attack") {
      if (pokemon.data.attack === value) {
        pokemonsFound.push(pokemon.name);
      }
    } else if (searchBy === "defense") {
      if (pokemon.data.defense === value) {
        pokemonsFound.push(pokemon.name);
      }
    } else if (searchBy === "isFlying") {
      if (pokemon.data.isFlying === value) {
        pokemonsFound.push(pokemon.name);
      }
    }
  });

  return pokemonsFound;
}

/* 
  example test case:

  console.log(findPokemons({ searchBy: 'type', value: 'fire' })); // [ 'Charizard', 'Rapidash', 'Magmar', 'Growlithe', 'Vulpix', 'Ponyta' ]
  console.log(findPokemons({ searchBy: 'isFlying', value: true })); // ['Charizard', 'Rapidash', 'Gyarados', 'Tentacruel', 'Wingull', 'Rowlet']
  console.log(findPokemons({ searchBy: 'hp', value: 55 })); // [ 'Magmar', 'Growlithe', 'Chikorita', 'Turtwig', 'Chinchou' ]
  console.log(findPokemons({ searchBy: 'attack', value: 50 })); // [ 'Wingull', 'Psyduck', 'Mudkip', 'Bulbasaur', 'Oddish', 'Voltorb' ]
  console.log(findPokemons({ searchBy: 'defense', value: 45 })); // [ 'Growlithe', 'Psyduck', 'Mudkip', 'Oddish', 'Voltorb' ]
  console.log(findPokemons({ searchBy: 'defense', value: 60 })); // [ 'Tentacruel', 'Chikorita', 'Turtwig', 'Magnemite' ]
  console.log(findPokemons({ searchBy: 'type', value: 'electric' })); // [ 'Pikachu', 'Magnemite', 'Voltorb', 'Chinchou' ]
*/

module.exports = { findPokemons };
