function vocalCounter(array) {
    let vocals = "AaIiUuEeOo"
    let foundedVocals = ""

    array.forEach((element) => {
        for(let i = 0; i < vocals.length; i++) {
            if (element === vocals[i]) {
                foundedVocals += vocals[i];
            }
        }
    });

    if(foundedVocals.length === 0) {
        return "Tidak ada huruf vokal yang ditemukan"
    } else if (foundedVocals.length > 0) {
        return `Jumlah vokal yang ditemukan sebanyak ${foundedVocals.length} berupa ${foundedVocals}`
    }
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
