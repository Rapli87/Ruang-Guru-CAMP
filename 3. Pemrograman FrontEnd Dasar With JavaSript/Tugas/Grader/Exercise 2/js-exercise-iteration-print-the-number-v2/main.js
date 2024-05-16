function printNumber(totalNumber) {
    let output = '';
    for (let i = 1; i <= totalNumber; i++) {
        output += i % 3 || 3;
    }

    return output;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber
