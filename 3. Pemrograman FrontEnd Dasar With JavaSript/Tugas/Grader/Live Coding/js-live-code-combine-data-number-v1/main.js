function combineData(data1, data2) {
  if (typeof data1 === "number" && typeof data2 === "number") {
    const result = data1 + data2;
    return `Parameter Pertama:${data1} & Parameter Kedua:${data2} - Hasil Proses= ${result}`;
  } else {
    return "Invalid Parameter";
  }
}


console.log(combineData('Ruangguru', '2023')); // "Invalid Parameter"
console.log(combineData(2023, 'Ruangguru')); // "Invalid Parameter"
console.log(combineData(2023, 2023)); // "Parameter Pertama:2023 & Parameter Kedua:2023 - Hasil Proses:4046"
console.log(combineData(-5, -10)); // "Parameter Pertama:Ruangguru & Parameter Kedua:2023 - Hasil Proses:-15"

module.exports = combineData;
