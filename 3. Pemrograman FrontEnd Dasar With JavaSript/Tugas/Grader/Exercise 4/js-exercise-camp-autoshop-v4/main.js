function convertItems(items) {
let result = []
    items.forEach((item)=> {
        result.push(item.split("|"))
    })

    return result
}

function filterItems(items) {
    let result = []

    items.forEach((item)=>{
        if (item.length > 1) {
            item[1] = parseInt(item[1])
            result.push(item)
        }
    })

    return result;
}

function generateSpareParts(items) {
    let spareParts = items.map((item) =>{
        let obj = {}

        obj.name = item[0]
        obj.price = item[1]
        obj.category = item [2]

        return obj
    })

    return spareParts
}

function itemsStatistics(items) {
    let result = {}

    items.forEach((item) => {
        if(result[item[2]] === undefined) {
            result[item[2]] = 0
        }

        result[item[2]] ++
    });

    return result;
}

function generateItemsData(items) {
    let result = {}

    let convertedItems = convertItems(items)
    let filteredItems = filterItems(convertedItems)
    let spareParts = generateSpareParts(filteredItems)
    let statistics = itemsStatistics(filteredItems)

    result = {
        spare_parts: spareParts,
        statistics
    }

    return result;
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}