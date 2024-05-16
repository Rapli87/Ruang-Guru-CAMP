function calcByQuantity(quantity) {
  let price = 0;
  if (quantity > 35) {
    price = 35 * 650 + (quantity - 35) * 600;
  } else {
    price = quantity * 650;
  }
  return `Jumlah uang yang harus dibayarkan untuk order ${quantity} adalah ${price}!`;
}

function calcByMoney(money) {
  let quantity = 0;
  if (money < 650) {
    return `Uang sebesar ${money} tidak cukup untuk membeli barang!`;
  } else if (money < 35 * 650) {
    quantity = Math.floor(money / 650);
    return `Jumlah barang yang dapat dibeli adalah ${quantity}, sisa uang ${
      money % 650
    }!`;
  } else {
    quantity = 35 + Math.floor((money - 35 * 650) / 600);
    if ((money - 35 * 650) % 600 === 0) {
      return `Jumlah barang yang dapat dibeli adalah ${quantity}, uang habis!`;
    } else {
      return `Jumlah barang yang dapat dibeli adalah ${quantity}, sisa uang ${
        money - quantity * 650
      }!`;
    }
  }
}

function bulkOrderCalculator(type, data) {
  if (type === "money") {
    return calcByMoney(data);
  } else if (type === "quantity") {
    return calcByQuantity(data);
  } else {
    return "Invalid type!";
  }
}

/* 
  example test case

  console.log(bulkOrderCalculator('money', 100000)); // Jumlah barang yang dapat dibeli adalah 163, sisa uang 450!
  console.log(bulkOrderCalculator('quantity', 100)); // Jumlah uang yang harus dibayarkan untuk order 100 adalah 61750!
  console.log(bulkOrderCalculator('money', 100)); // Uang sebesar 100 tidak cukup untuk membeli barang!
  console.log(bulkOrderCalculator('money', 1000)); // Jumlah barang yang dapat dibeli adalah 1, sisa uang 350!
  console.log(bulkOrderCalculator('money', 1300)); Jumlah barang yang dapat dibeli adalah 2, uang habis!
*/

module.exports = {
  bulkOrderCalculator,
  calcByQuantity,
  calcByMoney,
};
