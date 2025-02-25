async function calculate(number1, number2) {
    if (number1 === 0 && number2 === 0) {
      return Promise.reject("number1 and number2 cannot be 0");
    } else if (number1 % 2 === 0 && number2 % 2 === 0) {
      return Promise.resolve(number1 - number2);
    } else if (number1 % 2 === 0 && number2 % 2 !== 0) {
      return Promise.resolve(number1 + number2);
    } else if (number1 % 2 !== 0) {
      return Promise.resolve(number1 * number2);
    }
  }
  
  // Example usage:
  calculate(2, 3).then((result) => {
    console.log(result); // Output: 5
  }).catch((error) => {
    console.error(error);
  });

module.exports = calculate;