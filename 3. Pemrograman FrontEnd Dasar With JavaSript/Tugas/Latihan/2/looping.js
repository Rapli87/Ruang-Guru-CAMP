// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 1000; i++) {
//     console.log(i);
//   }

//  LOOPING Bentuk For
for (let i = 0; i < 5; i++) {
    console.log("Ini adalah iterasi ke-" + (i + 1) + ". nilai i adalah " + i);
  }

  let i = 0; //initial expression


//  LOOPING Bentuk While
while (i < 5) {
  //conditional expression
  console.log("Ini adalah iterasi ke-" + (i + 1) + ". nilai i adalah " + i); //statement
  i++; //increment expression
}

// LOOPING Bentuk Break
// Sebagai contoh, kita gunakan kode for loop sebelumnya (di atas) dan kita berhentikan di iterasi ke 3 :
for (let i = 0; i < 5; i++) {
    if (i == 3) {
      break;
    }
  
    console.log("Ini adalah iterasi ke-" + (i + 1) + ". nilai i adalah " + i);
  }

// LOOPING Bentuk Continue
// Mengambil contoh break di atas, maka jika kita gunakan continue, looping tidak akan berhenti total, tapi akan melewati proses di iterasi ke-3 dan tetap lanjut seperti biasa di iterasi ke-4 dan selanjutnya. Mari kita buktikan
for (let i = 0; i < 5; i++) {
    if (i == 3) {
      continue;
    }
  
    console.log("Ini adalah iterasi ke-" + (i + 1) + ". nilai i adalah " + i);
  }

// LOOPING Bentuk Infinite atau endless looping
// Looping dibawah ini tidak akan pernah selesai, karena Conditional Expression akan selalu bernilai true.
for (let i = 10; i <= 10; i--) {
    console.log(i);
  }

  