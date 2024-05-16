function calculatePromise(number1, number2) {
  return new Promise((resolve, reject) => {
    if (number1 === 0 && number2 === 0) {
      reject("number1 and number2 cannot be 0");
    } else {
      if (number1 % 2 === 0 && number2 % 2 === 0) {
        resolve(number1 - number2);
      } else if (number1 % 2 === 0 && number2 % 2 === 1) {
        resolve(number1 + number2);
      } else {
        resolve(number1 * number2);
      }
    }
  });
}

/* Penjelasan dari implementasi di atas adalah: 
1. Pertama-tama, function calculatePromise menerima 2 parameter yaitu number1 dan number2. Kemudian, function ini mengembalikan sebuah Promise dengan menggunakan sintaks new Promise.

2. Jika kedua number1 dan number2 adalah angka nol, maka Promise akan di-reject dengan error message "number1 and number2 cannot be 0".

3. Jika number1 dan number2 merupakan bilangan genap, maka function calculatePromise akan mengurangkan kedua bilangan tersebut dan mengembalikan hasilnya melalui Promise yang di-resolve.

4. Jika number1 merupakan bilangan genap dan number2 merupakan bilangan ganjil, maka function calculatePromise akan menjumlahkan kedua bilangan tersebut dan mengembalikan hasilnya melalui Promise yang di-resolve.

5. Jika number1 merupakan bilangan ganjil, maka function calculatePromise akan mengalikan kedua bilangan tersebut dan mengembalikan hasilnya melalui Promise yang di-resolve.

  Dengan implementasi di atas, function calculatePromise sudah dapat digunakan untuk melakukan perhitungan dinamis berdasarkan aturan yang telah ditentukan. Contoh penggunaannya adalah sebagai berikut: 
*/

// calculatePromise(2, 3)
//   .then(result => console.log(result)) // Output: 5
//   .catch(error => console.log(error));

// calculatePromise(3, 5)
//   .then(result => console.log(result)) // Output: 15
//   .catch(error => console.log(error));

// calculatePromise(2, 12)
//   .then(result => console.log(result)) // Output: -10
//   .catch(error => console.log(error));

// calculatePromise(8, 4)
//   .then(result => console.log(result)) // Output: 4
//   .catch(error => console.log(error));


module.exports = calculatePromise;
