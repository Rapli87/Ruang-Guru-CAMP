function minMax (str){
    let min = parseInt(str[0]);
    let max = parseInt(str[0]);

    // consloe.log(min, max);

    for ( let i = 0; i < str.length; i ++) {
        let num = parseInt(str[i])
        if(num < min) {
            min = num
        }

        if(num > max) {
            max = num
        }
    }

    // consloe.log(min, max);

    if (min === max) {
        return `Nilai terkecil dan terbesar adalah ${max}`;
    } else {
        return ` Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`;
    }
}

console.log(minMax("899111"));

module.exports = minMax;