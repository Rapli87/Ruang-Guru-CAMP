// TODO: answer here
function addNumber (numStr, options){
    let result = "";

    if (options === "left") {
        for (let i = 0; i < numStr.length - 1; i++) {
            result += parseInt(numStr[i]) + parseInt(numStr[i + 1]);
        }
    }else if (options === "right") {
        for (let i = numStr.length  - 1; i > 0; i--) {
            result += parseInt(numStr[i]) + parseInt(numStr[i - 1]);
        }
    }

    return result;
}

console.log(addNumber("012345", "left"));
console.log(addNumber("672318", "right"));

module.exports = addNumber;
