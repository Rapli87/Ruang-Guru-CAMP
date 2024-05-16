# Study Recommendation

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian `module.exports` dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

### Description

`Study Recommendation` adalah sebuah function yang akan memberikan rekomendasi jurusan yang bisa di ambil sesuai dengan kondisi nilai mata pelajaran.

Function ini akan menerima 3 parameter yaitu:

- `mathScore` yang merupakan nilai matematika.
- `physicsScore` yang merupakan nilai fisika.
- `englishScore` yang merupakan nilai bahasa inggris.

Untuk mendapatkan rekomendasi jurusan, nilai minimal yang harus diperoleh pada setiap materi adalah sebagai berikut:

- `mathScore` minimal 80
- `physicsScore` minimal 75
- `englishScore` minimal 70

Berikut adalah kriteria yang harus dipenuhi untuk mendapatkan rekomendasi untuk setiap jurusan:

- Jurusan `Teknik Informatika` hanya bisa diambil jika nilai matematika, fisika, dan bahasa inggris lebih besar atau
  sama dengan 85.
- Jurusan `Teknik` hanya bisa diambil jika nilai matematika lebih besar atau sama dengan 80 dan nilai fisika lebih besar
  atau sama dengan 75.
- Jurusan `Ekonomi` hanya bisa diambil jika nilai matematika lebih besar atau sama dengan 80 dan nilai bahasa inggris
  lebih besar dari 70.
- Jurusan `Sastra Inggris` hanya bisa diambil jika nilai bahasa inggris lebih besar atau sama dengan 70.
- Jurusan `Matematika` hanya bisa diambil jika nilai matematika lebih besar atau sama dengan 80.
- Jurusan `Fisika` hanya bisa diambil jika nilai fisika lebih besar atau sama dengan 75.

Function ini akan mengembalikan sebuah string yang berisi rekomendasi jurusan yang bisa diambil oleh siswa tersebut:

- Jika tidak ada rekomendasi jurusan yang bisa diambil, maka function akan mengembalikan string
  `Maaf, tidak ada rekomendasi yang dapat kami berikan`.
- Jika ada rekomendasi jurusan yang bisa diambil, maka function akan mengembalikan string
  `Rekomendasi jurusan yang bisa dipilih: [jurusan1];[jurusan2];.......`.
- Setiap jurusan dipisahkan dengan tanda `;`.
- Urutan jurusan harus sama dengan urutan kriteria diatas.

---

### Constraints

- `mathScore`, `physicsScore`, dan `englishScore` berupa number.
- `mathScore`, `physicsScore`, dan `englishScore` tidak boleh lebih kecil dari 0.
- `mathScore`, `physicsScore`, dan `englishScore` tidak boleh lebih besar atau sama dengan 100.

---

### Test Case Examples

#### Test Case 1

**Input**:

```txt
mathScore: 90
physicsScore: 90
englishScore: 90
```

**Expected Output / Behavior**:

```txt
Rekomendasi jurusan yang bisa dipilih: Teknik Informatika;Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;
```

**Explanation**:

```txt
Karena nilai matematika, fisika, dan bahasa inggris lebih besar atau sama dengan 85, maka siswa tersebut bisa mengambil jurusan Teknik Informatika, Teknik, Ekonomi, Sastra Inggris, Matematika, dan Fisika.
```

---

#### Test Case 2

**Input**:

```txt
mathScore: 0
physicsScore: 0
englishScore: 0
```

**Expected Output / Behavior**:

```txt
Maaf, tidak ada rekomendasi yang dapat kami berikan
```

**Explanation**:

```txt
Karena nilai matematika, fisika, dan bahasa inggris lebih kecil dari 80, maka siswa tersebut tidak bisa mengambil jurusan apapun.
```

---

#### Test Case 3

**Input**:

```txt
mathScore: 90
physicsScore: 90
englishScore: 0
```

**Expected Output / Behavior**:

```txt
Rekomendasi jurusan yang bisa dipilih: Teknik;Matematika;Fisika;
```

**Explanation**:

```txt
Karena nilai matematika dan fisika lebih besar atau sama dengan 80, dan nilai bahasa inggris lebih kecil dari 70, maka siswa tersebut bisa mengambil jurusan Teknik, Matematika, dan Fisika.
```

---
