function calcAge(age, params) {
    if (age < 1) {
      return "Age cannot be under 1 year";
    }
    if (params === "months") {
      return age * 12;
    }
    if (params === "days") {
      return age * 365;
    }
    return "Invalid params value, must be 'months' or 'days'";
  }
  

module.exports = calcAge;