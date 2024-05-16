// filename: luas-persegi-panjang.js
const args = process.argv;

const panjang = Number(args[2]);
const lebar = Number(args[3]);

const luas = panjang * lebar;

console.log(
  `Luas persegi panjang dengan ukuran panjang ${panjang} dan lebar ${lebar} adalah ${luas}`
);