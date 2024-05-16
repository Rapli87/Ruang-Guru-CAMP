const students = [
  {
    name: 'Ahmed',
    details: {
      age: 18,
      weight: 60,
      height: 160,
      hobby: 'football',
    },
  },
  {
    name: 'Mohammed',
    details: {
      age: 19,
      weight: 70,
      height: 170,
      hobby: 'swimming',
    },
  },
  {
    name: 'Ali',
    details: {
      age: 20,
      weight: 80,
      height: 180,
      hobby: 'reading',
    },
  },
  {
    name: 'Sara',
    details: {
      age: 18,
      weight: 60,
      height: 160,
      hobby: 'football',
    },
  },
  {
    name: 'Fatima',
    details: {
      age: 19,
      weight: 75,
      height: 165,
      hobby: 'swimming',
      favoriteFood: 'fish',
    },
  },
  {
    name: 'Layla',
    details: {
      age: 20,
      weight: 80,
      height: 170,
      hobby: 'dancing',
      favoriteFood: 'pizza',
    },
  },
  {
    name: 'Hassan',
    details: {
      age: 19,
      weight: 70,
      height: 180,
      hobby: 'drawing',
      favoriteFood: 'meat',
    },
  },
  {
    name: 'Noura',
    details: {
      age: 18,
      weight: 70,
      height: 165,
      hobby: 'cooking',
      favoriteFood: 'pasta',
    },
  },
  {
    name: 'Omar',
    details: {
      age: 20,
      weight: 75,
      height: 175,
      hobby: 'swimming',
      favoriteFood: 'fish',
    },
  },
  {
    name: 'Laila',
    details: {
      age: 19,
      weight: 60,
      height: 165,
      hobby: 'reading',
      favoriteFood: 'burger',
    },
  },
  {
    name: 'Abdullah',
    details: {
      age: 20,
      weight: 80,
      height: 170,
      hobby: 'running',
      favoriteFood: 'pizza',
    },
  },
  {
    name: 'Jawad',
    details: {
      age: 18,
      weight: 70,
      height: 170,
      hobby: 'football',
      favoriteFood: 'meat',
    },
  },
  {
    name: 'Aisha',
    details: {
      age: 19,
      weight: 75,
      height: 175,
      hobby: 'swimming',
      favoriteFood: 'pasta',
    },
  },
  {
    name: 'Mansour',
    details: {
      age: 18,
      weight: 75,
      height: 180,
      hobby: 'drawing',
      favoriteFood: 'chicken',
    },
  },
  {
    name: 'Mariam',
    details: {
      age: 20,
      weight: 65,
      height: 165,
      hobby: 'running',
      favoriteFood: 'burger',
    },
  },
  {
    name: 'Khalid',
    details: {
      age: 19,
      weight: 70,
      height: 175,
      hobby: 'football',
      favoriteFood: 'pizza',
    },
  },
  {
    name: 'Amina',
    details: {
      age: 18,
      weight: 65,
      height: 170,
      hobby: 'singing',
      favoriteFood: 'cheese',
    },
  },
  {
    name: 'Yousef',
    details: {
      age: 20,
      weight: 70,
      height: 175,
      hobby: 'dancing',
      favoriteFood: 'chicken',
    },
  },
  {
    name: 'Rawan',
    details: {
      age: 19,
      weight: 75,
      height: 180,
      hobby: 'swimming',
      favoriteFood: 'fish',
    },
  },
  {
    name: 'Majid',
    details: {
      age: 18,
      weight: 70,
      height: 170,
      hobby: 'reading',
      favoriteFood: 'pasta',
    },
  },
  {
    name: 'Salem',
    details: {
      age: 20,
      weight: 80,
      height: 175,
      hobby: 'football',
      favoriteFood: 'burger',
    },
  },
];

function studentGrouping(criteria) {
  return null // TODO: replace this
}

/* 
example test cases:
console.log(studentGrouping({ groupBy: 'hobby', value: 'swimming' })); // [ 'Mohammed', 'Fatima', 'Omar', 'Aisha', 'Rawan' ]
console.log(studentGrouping({ groupBy: 'favoriteFood', value: 'pasta' })); // [ 'Noura', 'Aisha', 'Majid' ]
console.log(studentGrouping({ groupBy: 'age', value: 20 })); // ['Ali', 'Layla', 'Omar', 'Abdullah', 'Mariam', 'Yousef', 'Salem']
console.log(studentGrouping({ groupBy: 'height', value: 170 })); // [ 'Mohammed', 'Layla', 'Abdullah', 'Jawad', 'Amina', 'Majid' ]
console.log(studentGrouping({ groupBy: 'weight', value: 75 })); // [ 'Fatima', 'Omar', 'Aisha', 'Mansour', 'Rawan' ]
console.log(studentGrouping({ groupBy: 'hobby', value: 'football' })); // [ 'Ahmed', 'Sara', 'Jawad', 'Khalid', 'Salem' ]
*/

module.exports = { studentGrouping };
