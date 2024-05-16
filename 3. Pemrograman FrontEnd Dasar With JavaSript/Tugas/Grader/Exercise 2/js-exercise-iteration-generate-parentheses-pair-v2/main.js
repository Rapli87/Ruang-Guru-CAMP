function generateParenthesesPair(numberOfPairs) {
  let output = "";
  let openCount = 0;
  for (let i = 0; i < 2 * numberOfPairs; i++) {
    // tambahkan tanda kurung buka jika kita belum mencapai batas
    if (openCount < numberOfPairs) {
      output += "(";
      openCount++;
    } else {
      // tambahkan tanda kurung tutup jika kita telah menggunakan semua tanda kurung buka
      output += ")";
    }
  }
  return output;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
