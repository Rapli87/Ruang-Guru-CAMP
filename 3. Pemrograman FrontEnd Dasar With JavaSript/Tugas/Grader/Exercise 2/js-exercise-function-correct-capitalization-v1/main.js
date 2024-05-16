function correctCapitalization (paragraph) {
    let result = "";

    for (let i = 0; i < paragraph.length; i++) {
        if (i === 0){
            result += paragraph[i].toUpperCase(); 
        } else if (paragraph[i - 2] === ".") {
            result += paragraph[i].toUpperCase();
        } else {
            result += paragraph[i];
        }
    }

    return result;
}

module.exports = correctCapitalization