function quantityDiscount(quantity, price) {
  const tax = 0.11; // 11/100
  let discount = 0;
  
  const subtotal = quantity * price;

  if (quantity >= 10){
    discount = subtotal * 0.2;
  } else if (quantity >= 5){
    discount = subtotal * 0.15;
  }

  const subtotalDiscount = subtotal - discount;

  return subtotalDiscount + tax * subtotalDiscount; 
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
