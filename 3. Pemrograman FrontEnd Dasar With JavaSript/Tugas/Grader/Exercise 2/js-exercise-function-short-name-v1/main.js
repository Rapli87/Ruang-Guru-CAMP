function shortName (name, options) {
    let flag = false
    let firstName = ""
    let lastName = ""

    for (let i = 0; i < name.length; i++) {
        if(name[i] === " ") {
            flag = true
        }

        if(name[i] !== " " && flag === false) {
            firstName += name[i]
        } else if (name[i] !== " " && flag === true) {
            lastName += name[i]
        }
    }

    console.log(firstName);
    console.log(lastName);

    if (lastName.length === 0) {
        return "Invalid Name";
    } else if (options === "first") {
        return `${firstName[0]}. ${lastName}`;
    } else if (options === "last") {
        return `${firstName} ${lastName[0]}.`
    } else if (options === "full") {
        return name;
    }
}

console.log(shortName("Rafli Al Fajar"));

module.exports = shortName