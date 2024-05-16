# Phone Bill Calculator

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh
Mentor. Dengan penjelasan sebagai berikut:

- **Durasi**: 20 menit pengerjaan
- **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
- **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan
  Live Coding.

### Description

`phoneBillCalculator` adalah sebuah function yang akan melakukan perhitungan biaya atau durasi waktu panggilan telepon
berdasarkan data yang diberikan.

Telepon yang digunakan untuk melakukan panggilan telepon memiliki beberapa tarif yang berbeda-beda untuk setiap durasi
waktu panggilan teleponnya. Semakin lama durasi waktu panggilan telepon, maka tarif yang digunakan akan semakin murah.
Berikut adalah tarif yang digunakan untuk setiap durasi waktu panggilan telepon:

- Durasi waktu panggilan telepon 3 menit pertama, tarif yang digunakan adalah 750/menit.
- Durasi waktu panggilan telepon setelah menit 3 tarif yang digunakan adalah 500/menit.
- Jika uang yang dimiliki oleh seseorang tidak mencukupi untuk melakukan panggilan telepon dimenit pertama, maka
  panggilan telepon tidak bisa dilakukan.
- Jika uang yang dimiliki oleh seseorang tidak mencukupi untuk melakukan panggilan telepon dimenit selanjutnya, maka
  panggilan telepon akan berhenti.

---

Untuk mempermudah perhitungan, digunakan function helper `calcByTime` & `calcByMoney` yang akan melakukan perhitungan
berdasarkan durasi waktu atau biaya panggilan telepon secara terpisah.

Function helper `calcByTime` akan menerima satu parameter yaitu `time` yang merupakan durasi waktu panggilan telepon
dalam satuan menit. Function helper `calcByMoney` akan menerima satu parameter yaitu `money` yang merupakan jumlah uang
yang dimiliki oleh seseorang.

Function helper `calcByTime` akan mengembalikan sebuah `string` yang berisi informasi mengenai durasi waktu atau biaya
panggilan telepon yang telah dihitung berdasarkan parameter yang diberikan dan tarif yang digunakan dengan format
sebagai berikut:

- Jika `type` bernilai `time`, maka function akan mengembalikan sebuah `string` dengan format
  `Uang yang dibutuhkan untuk melakukan panggilan selama <durasi telepon> menit adalah <hasil perhitungan>`.

Function helper `calcByMoney` akan mengembalikan sebuah `string` yang berisi informasi mengenai durasi waktu atau biaya
panggilan telepon yang telah dihitung berdasarkan parameter yang diberikan dan tarif yang digunakan dengan format
sebagai berikut:

- Jika `type` bernilai `money` dan uang tidak cukup untuk melakukan panggilan telepon, maka function akan mengembalikan
  sebuah `string` dengan format `Uang sebesar <jumlah uang> tidak cukup untuk melakukan panggilan.`.
- Jika `type` bernilai `money` dan semua uang habis terpakai, maka function akan mengembalikan sebuah `string` dengan
  format `Cukup untuk melakukan panggilan selama <durasi telepon> menit, uang habis.`.
- Jika `type` bernilai `money` dan masih ada sisa uang, maka function akan mengembalikan sebuah `string` dengan format
  `Cukup untuk melakukan panggilan selama <durasi telepon> menit, sisa uang <sisa uang>.`.

---

Function `phoneBillCalculator` akan menerima dua parameter yaitu `type` dan `data`.

Parameter `type` bertipe data `string` dan merupakan informasi yang menyatakan perhitungan yang dilakukan oleh function
`phoneBillCalculator` berdasarkan durasi waktu atau biaya.

- Jika `type` bernilai `time`, maka function akan melakukan perhitungan berdasarkan durasi waktu panggilan telepon dan
  akan menggunakan function helper `calcByTime`.
- Jika `type` bernilai `money`, maka function akan melakukan perhitungan berdasarkan biaya panggilan telepon dan akan
  menggunakan function helper `calcByMoney`.
- Jika `type` bernilai selain `time` dan `money`, maka function akan mengembalikan sebuah `string` dengan value
  `Invalid Parameter!`.

Parameter `data` bertipe data `number` dan merupakan informasi yang menyatakan durasi waktu atau jumlah uang yang
dimiliki oleh seseorang.

- Jika `type` bernilai `time`, maka `data` merupakan durasi waktu panggilan telepon dalam satuan menit.
- Jika `type` bernilai `money`, maka `data` merupakan jumlah uang yang dimiliki oleh seseorang.

function `phoneBillCalculator` akan mengembalikan sebuah `string` yang didapatkan dari function helper yang digunakan
berdasarkan parameter `type`.

### Constraints

- function `phoneBillCalculator` sudah dipastikan akan menerima dua parameter.
- parameter `type` akan selalu berupa `string`.
- parameter `data` akan selalu berupa `number`.
- parameter `type` tidak selalu bernilai `time` atau `money`.
- parameter `data` bernilai 0 <= `data` <= 9999999.

### Test Case Examples

#### Test Case 1

Input

```text
parameter pertama: time
parameter kedua: 10
```

Output

```text
Uang yang dibutuhkan untuk melakukan panggilan selama 10 menit adalah 5750
```

Explanation

```text

Type = time, data = 10

Karena type bernilai time, maka function akan menggunakan function helper calcByTime.

- Biaya panggilan telepon menit pertama adalah 750.
- Biaya panggilan telepon menit kedua adalah 750.
- Biaya panggilan telepon menit ketiga adalah 750.
- Biaya panggilan telepon menit keempat adalah 500.
- Biaya panggilan telepon menit kelima adalah 500.
- Biaya panggilan telepon menit keenam adalah 500.
- Biaya panggilan telepon menit ketujuh adalah 500.
- Biaya panggilan telepon menit kedelapan adalah 500.
- Biaya panggilan telepon menit kesembilan adalah 500.
- Biaya panggilan telepon menit kesepuluh adalah 500.
- Total biaya panggilan telepon adalah 5750.

Function helper calcByTime akan mengembalikan string "Uang yang dibutuhkan untuk melakukan panggilan selama 10 menit adalah 5750."

Kemudian function phoneBillCalculator akan mengembalikan string "Uang yang dibutuhkan untuk melakukan panggilan selama 10 menit adalah 5750." yang didapatkan dari function helper calcByTime.
```

#### Test Case 2

Input

```text
parameter pertama: money
parameter kedua: 4000
```

Output

```text
cukup untuk melakukan panggilan selama 6 menit, sisa uang 250.
```

Explanation

```text

type = money, data = 4000

Karena type bernilai money, maka function akan menggunakan function helper calcByMoney.

- Biaya panggilan telepon menit pertama adalah 750, uang yang tersisa adalah 3250, uang masih cukup untuk melakukan panggilan menit kedua.
- Biaya panggilan telepon menit kedua adalah 750, uang yang tersisa adalah 2500, uang masih cukup untuk melakukan panggilan menit ketiga.
- Biaya panggilan telepon menit ketiga adalah 750, uang yang tersisa adalah 1750, uang masih cukup untuk melakukan panggilan menit keempat.
- Biaya panggilan telepon menit keempat adalah 500, uang yang tersisa adalah 1250, uang masih cukup untuk melakukan panggilan menit kelima.
- Biaya panggilan telepon menit kelima adalah 500, uang yang tersisa adalah 750, uang masih cukup untuk melakukan panggilan menit keenam.
- Biaya panggilan telepon menit keenam adalah 500, uang yang tersisa adalah 250, uang tidak cukup untuk melakukan panggilan menit ketujuh.

Function helper calcByMoney akan mengembalikan string "cukup untuk melakukan panggilan selama 6 menit, sisa uang 250."

Kemudian function phoneBillCalculator akan mengembalikan string "cukup untuk melakukan panggilan selama 6 menit, sisa uang 250." yang didapatkan dari function helper calcByMoney.
```

#### Test Case 3

Input

```text
parameter pertama: money
parameter kedua: 2250
```

Output

```text
cukup untuk melakukan panggilan selama 3 menit, uang habis.
```

Explanation

```text

type = money, data = 2250

Karena type bernilai money, maka function akan menggunakan function helper calcByMoney.

- Biaya panggilan telepon menit pertama adalah 750, uang yang tersisa adalah 1500, uang masih cukup untuk melakukan panggilan menit kedua.
- Biaya panggilan telepon menit kedua adalah 750, uang yang tersisa adalah 750, uang masih cukup untuk melakukan panggilan menit ketiga.
- Biaya panggilan telepon menit ketiga adalah 750, uang yang tersisa adalah 0, uang tidak cukup untuk melakukan panggilan menit keempat.

Function helper calcByMoney akan mengembalikan string "cukup untuk melakukan panggilan selama 3 menit, uang habis."
```

#### Test Case 4

Input

```text
parameter pertama: coins
parameter kedua: 1000
```

Output

```text
Invalid Parameter!
```

Explanation

```text
type = coins, data = 1000

Parameter `type` bernilai `coins` yang merupakan nilai yang tidak valid.

Maka function akan mengembalikan string "Invalid Parameter!"
```
