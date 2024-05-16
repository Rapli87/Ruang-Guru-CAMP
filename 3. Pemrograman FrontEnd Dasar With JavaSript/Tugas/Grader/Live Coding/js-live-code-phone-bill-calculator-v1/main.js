function calcByTime(minutes) {
  if (minutes < 1) {
    return "Invalid Parameter!";
  } else if (minutes <= 3) {
    let total = minutes * 750;
    return `Uang yang dibutuhkan untuk melakukan panggilan selama ${minutes} menit adalah ${total}.`;
  } else {
    let total = 2250 + (minutes - 3) * 500;
    return `Uang yang dibutuhkan untuk melakukan panggilan selama ${minutes} menit adalah ${total}.`;
  }
}

function calcByMoney(money) {
  if (money < 750) {
    return `Uang sebesar ${money} tidak cukup untuk melakukan panggilan.`;
  } else {
    let remainingMoney = money - 750;
    let minutes = Math.floor(remainingMoney / 500) + 1;
    let total = calcByTime(minutes);
    let change = remainingMoney % 500;
    if (change > 0) {
      return `${total} Cukup untuk melakukan panggilan selama ${minutes} menit, sisa uang ${change}.`;
    } else {
      return `${total} Cukup untuk melakukan panggilan selama ${minutes} menit, uang habis.`;
    }
  }
}

function phoneBillCalculator(type, data) {
  if (type === "time") {
    return calcByTime(data);
  } else if (type === "money") {
    return calcByMoney(data);
  } else {
    return "Invalid Parameter!";
  }
}

//example test case:
console.log(phoneBillCalculator("time", 10)); // Uang yang dibutuhkan untuk melakukan panggilan selama 10 menit adalah 5750.
console.log(phoneBillCalculator("time", 5)); // Uang yang dibutuhkan untuk melakukan panggilan selama 5 menit adalah 3250.
console.log(phoneBillCalculator("time", 1)); // Uang yang dibutuhkan untuk melakukan panggilan selama 1 menit adalah 750.
console.log(phoneBillCalculator("time", 18)); // Uang yang dibutuhkan untuk melakukan panggilan selama 18 menit adalah 9750.
console.log(phoneBillCalculator("money", 5750)); // Cukup untuk melakukan panggilan selama 10 menit, uang habis.
console.log(phoneBillCalculator("money", 2250)); // Cukup untuk melakukan panggilan selama 3 menit, uang habis.
console.log(phoneBillCalculator("money", 750)); // Cukup untuk melakukan panggilan selama 1 menit, uang habis.
console.log(phoneBillCalculator("money", 10500)); // Cukup untuk melakukan panggilan selama 19 menit, sisa uang 250.
console.log(phoneBillCalculator("money", 10000)); // Cukup untuk melakukan panggilan selama 18 menit, sisa uang 250.
console.log(phoneBillCalculator("money", 500)); // Uang sebesar 500 tidak cukup untuk melakukan panggilan.
console.log(phoneBillCalculator("money", 4000)); // Cukup untuk melakukan panggilan selama 6 menit, sisa uang 250.
console.log(phoneBillCalculator("value", 5000)); // Invalid Parameter!

module.exports = {
  phoneBillCalculator,
  calcByTime,
  calcByMoney,
};
