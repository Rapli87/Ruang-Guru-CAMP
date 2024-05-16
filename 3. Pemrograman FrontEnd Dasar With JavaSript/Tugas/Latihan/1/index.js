// aplikasi untuk menghitung luas persegi panjang
// luas = panjang x lebar

// TANPA ARGV
// const panjang = 5;
// const lebar = 15;

// const luas = panjang * lebar;

// console.log(luas);

// DENGAN ARGV
const argv = process.argv;

const panjang = argv[2];
const lebar = argv[3];

const luas = panjang * lebar;

console.log(luas);
