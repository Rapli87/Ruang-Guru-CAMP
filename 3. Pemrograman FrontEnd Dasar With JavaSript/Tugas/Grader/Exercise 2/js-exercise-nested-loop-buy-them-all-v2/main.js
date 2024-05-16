function pecah (input, delimeter) {
  let item = "";
  const list = [];
  for (let id = 0; id < input.length; id++) {
    if (input[id] !== delimeter) {
      item += input[id];
    } else {
      list.push(item);
      item = "";
    }

    if (id === input.length - 1) {
      list.push(item);
    }
  }

  return list
}

function buyThemAll(books, budget) {
  let budgetLeft = budget;
  const cart = [];
  const bookList = pecah(books, ",");
  for (let id = 0; id < bookList.length; id++) {
  const item = bookList[id];
  const desc = pecah(item, ":");
  const title = desc[0];
  const price = Number (desc[1]);

  if (budgetLeft >= price) {
    cart.push(title);
    budgetLeft -= price;
  }
}
let output = "";
if (cart.length === 0) {
  output = `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budgetLeft}.`
} else {
  const listBookString = cart.join(", ");
  output = `Afista membeli ${cart.length} buku yaitu ${listBookString}. Total belanja ${budget - budgetLeft}, sisa uang Afista adalah ${budgetLeft}.`
}
return output;
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",200000)); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
