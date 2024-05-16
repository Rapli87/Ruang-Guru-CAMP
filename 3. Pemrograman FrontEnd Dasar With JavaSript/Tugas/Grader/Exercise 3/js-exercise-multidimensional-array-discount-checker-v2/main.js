function discountChecker(costumers, date) {
    let result = []
    let arrDate = date.split(".")
    let day = parseInt(arrDate[0])

    costumers.forEach((pelanggan) => {
        let status = pelanggan[1]
        let arrPrice = pelanggan[0].split(" ")
        let price = parseInt(arrPrice[1])

        if(status === 'member') {
            result.push(pelanggan) 
        } else if (status === 'non-member') {
            if (price % 2 === 0 && day % 2 === 0) {
                result.push(pelanggan)
            } else if(price % 2 !== 0 && day % 2 !== 0) {
                    result.push(pelanggan)
            }
        }
    });

    return result;
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
