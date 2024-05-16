const numbers = [10, 20, 25];

const addAll = numbers.reduce(function (prevValue, number) {
  return prevValue + number;
});

const subAll = numbers.reduce(function (prevValue, number) {
  return prevValue - number;
});

const addAllBase50 = numbers.reduce(function (prevValue, number) {
  return prevValue + number;
}, 50);

console.log("add all numbers : ", addAll);
console.log("substract all numbers : ", subAll);
console.log("add all numbers, initial value 50 : ", addAllBase50);
