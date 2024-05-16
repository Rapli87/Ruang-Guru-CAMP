for (let baris = 1; baris <= 2; baris++) {
    for (let kolom = 1; kolom <= 3; kolom++) {
      console.log("ini adalah baris " + baris + ", kolom " + kolom);
    }
  }

//  Membuat pola segitiga
for (let i = 1; i <= 5; i++) {
    let asteriskCharacter = "";
    for (let j = 1; j <= i; j++) {
      asteriskCharacter += "*";
    }
    console.log(asteriskCharacter);
  }