function countAndSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i % 3 === 0 ? 3 : i % 3;
  }
  return sum;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 37

module.exports = countAndSum;
