function kelvinToCelsius(kelvin) {
  // your code here
  return parseFloat((kelvin - 273.15).toFixed(2));
}

function kelvinToFahrenheit(kelvin) {
  // your code here
  return parseFloat((((kelvin - 273.15) * 9) / 5 + 32).toFixed(2));
}

function celsiusToFahrenheit(celsius) {
  // your code here
  return parseFloat(((celsius * 9/5) + 32).toFixed(2));
}

function celsiusToKelvin(celsius) {
  // your code here
  return parseFloat((celsius + 273.15).toFixed(2));
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  return parseFloat(((fahrenheit - 32) * 5/9 + 273.15).toFixed(2));
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
  return parseFloat(((fahrenheit - 32) * 5/9).toFixed(2));
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  // your code here
  if (initialUnit === "K") {
    if (finalUnit === "C") {
      return kelvinToCelsius(temperature);
    } else if (finalUnit === "F") {
      return kelvinToFahrenheit(temperature);
    }
  } else if (initialUnit === "C") {
    if (finalUnit === "F") {
      return celsiusToFahrenheit(temperature);
    } else if (finalUnit === "K") {
      return celsiusToKelvin(temperature);
    }
  } else if (initialUnit === "F") {
    if (finalUnit === "K") {
      return fahrenheitToKelvin(temperature);
    } else if (finalUnit === "C") {
      return fahrenheitToCelsius(temperature);
    }
  }
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
