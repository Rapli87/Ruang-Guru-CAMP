function deretanAngkaHinggaN(n) {
  if (n <= 1) {
    return "Incorrect param";
  }
  
  let result = "";
  for (let i = n-1; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      result += j;
    }
  }
  return result;
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
