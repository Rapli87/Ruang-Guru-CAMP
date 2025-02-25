function stockOpname(items) {
    let stockItems = {
        "Ram": 10,
        "Motherboard": 4,
        "Processor": 5,
        "SSD": 8,
        "PSU": 12,
        "Cooling": 5,
    }
    
    if(items.length === 0) {
        return "Data not found"
    }

    /*
    kita akses stockItems >>> for in
    kita akses items >>> for loop atau for each
    kita bandingkan, jika key nya sama dengan itemName
    kita mengurangi value dari masing" key dengan nominal terjualnya
    */ 

   for (let key in stockItems) {
    // console.log(key, "ini key apa");
    // console.log(stockItems[key], "ini valuenya");

    for (let i = 0; i < items.length; i++) {
        let itemName = items[i][0]
        let nominalSold = items[i][1]

        if(key === itemName) {
            stockItems[key] -= nominalSold
        }
    }
   }
   return stockItems
}

let items1 = [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]

let items2 = [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname
