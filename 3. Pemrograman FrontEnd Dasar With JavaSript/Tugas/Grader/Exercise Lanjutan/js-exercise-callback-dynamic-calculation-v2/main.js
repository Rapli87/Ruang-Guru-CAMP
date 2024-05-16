function calculate(number1, number2, callback) {
  let result;
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    result = number1 - number2;
  } else if (number1 % 2 === 0 && number2 % 2 !== 0) {
    result = number1 + number2;
  } else if (number1 % 2 !== 0) {
    result = number1 * number2;
  }
  setTimeout(() => callback(result), 2000);
}

// function displayResult(result) {
//   console.log(result);
// }

// calculate(2, 3, displayResult); // Output: 5
// calculate(3, 5, displayResult); // Output: 15
// calculate(2, 5, displayResult); // Output: 7
// calculate(8, 4, displayResult); // Output: 4

  
  module.exports = calculate;
  