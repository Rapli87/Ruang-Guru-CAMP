# Bulk Order Calculator

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh Mentor. Dengan penjelasan sebagai berikut:

- **Durasi**: 20 menit pengerjaan
- **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
- **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan Live Coding.

### Description

`bulkOrderCalculator` adalah sebuah function yang akan melakukan perhitungan **uang** yang harus dibayarkan / **jumlah maksimal barang** yang dapat dibeli.

Proses bulk order ini dilakukan dengan cara seseorang membeli barang dengan dan akan mendapatkan harga yang lebih murah jika membeli barang dalam jumlah tertentu.

Semakin banyak jumlah barang yang dibeli, maka harga yang didapatkan akan semakin murah. Berikut adalah tarif yang digunakan untuk setiap jumlah barang yang dibeli:

- Pembelian 35 barang pertama, harga yang didapatkan adalah 650 per barang.
- Untuk pembelian selanjutnya > 35 barang, harga yang didapatkan adalah 600 per barang.
- Jika uang yang dimiliki tidak mencukupi untuk membeli barang, maka barang tidak bisa dibeli.

---

Untuk mempermudah perhitungan, digunakan function helper `calcByMoney` & `calcByQuantity` yang akan melakukan perhitungan berdasarkan jumlah uang atau jumlah barang yang akan dibeli secara terpisah.

Function helper `calcByQuantity` akan menerima satu parameter yaitu `quantity` yang merupakan jumlah barang yang akan dibeli.

Function helper `calcByMoney` akan menerima satu parameter yaitu `money` yang merupakan jumlah uang yang dimiliki.

---

Function helper `calcByQuantity` akan mengembalikan nilai berupa `string` yang berisi informasi berupa jumlah uang yang harus dibayarkan dengan format sebagai berikut:

```text
Jumlah uang yang harus dibayarkan untuk order <jumlah item> adalah <jumlah uang yang harus dibayarkan>!
```

---

Function helper `calcByMoney` akan mengembalikan nilai berupa `string` yang berisi informasi berupa jumlah barang yang dapat dibeli dengan format sebagai berikut:

- Jika uang yang dimiliki tidak mencukupi untuk membeli barang, maka akan mengembalikan `string` berikut:

  ```text
  Uang sebesar <jumlah uang> tidak cukup untuk membeli barang!
  ```

- Jika semua uang yang dimiliki cukup untuk membeli barang, maka akan mengembalikan `string` berikut:

  ```text
  Jumlah barang yang dapat dibeli adalah <jumlah barang>, uang habis!
  ```

- Jika uang yang dimiliki cukup untuk membeli barang, namun masih bersisa, maka akan mengembalikan `string` berikut:

  ```text
  Jumlah barang yang dapat dibeli adalah <jumlah barang>, sisa uang <jumlah uang yang masih tersisa>!
  ```

---

Function `bulkOrderCalculator` akan menerima dua parameter yaitu `type` dan `data`.

Parameter `type` bertipe data `string` dan merupakan informasi yang menyatakan perhitungan yang dilakukan oleh function `bulkOrderCalculator` berdasarkan jumlah barang atau jumlah uang yang dimiliki.

- Jika `type` bernilai `money`, maka function `bulkOrderCalculator` akan melakukan perhitungan berdasarkan jumlah uang yang dimiliki dan akan memanggil function helper `calcByMoney`.
- Jika `type` bernilai `quantity`, maka function `bulkOrderCalculator` akan melakukan perhitungan berdasarkan jumlah barang yang akan dibeli dan akan memanggil function helper `calcByQuantity`.
- Jika `type` bernilai selain `money` dan `quantity`, maka function `bulkOrderCalculator` akan mengembalikan `string` berikut:

  ```text
  Invalid type!
  ```

Parameter `data` bertipe data `number` dan merupakan jumlah barang atau jumlah uang yang akan digunakan untuk melakukan perhitungan.

- Jika `type` bernilai `money`, maka `data` merupakan jumlah uang yang dimiliki.
- Jika `type` bernilai `quantity`, maka `data` merupakan jumlah barang yang akan dibeli.

Funtion `bulkOrderCalculator` akan mengembalikan nilai berupa `string` yang didapatkan dari function helper yang dipanggil.

---

### Constraints

- function `bulkOrderCalculator` sudah dipastikan akan menerima 2 parameter yaitu `type` dan `data`.
- parameter `type` akan selalu berupa string.
- parameter `data` akan selalu berupa number.
- parameter `type` tidak selalu bernilai `money` atau `quantity`.
- parameter `data` bernilai 0 <= `data` <= 9999999.

### Examples

#### Test Case 1

Input:

```text
parameter 1: money
parameter 2: 100000
```

Output:

```text
Jumlah barang yang dapat dibeli adalah 163, sisa uang 450!
```

Explanation:

- Parameter `type` bernilai `money`, maka function `bulkOrderCalculator` akan melakukan perhitungan berdasarkan jumlah uang yang dimiliki dan akan memanggil function helper `calcByMoney`.
- Parameter `data` bernilai 100000, maka function `bulkOrderCalculator` akan memanggil function helper `calcByMoney` dengan parameter `money` bernilai 100000.
- 35 barang pertama menggunakan harga 650 per barang: 35 \* 650 = 22750
- Sisa uang 100000 - 22750 = 77250
- Barang ke 36 dan seterusnya menggunakan harga 600 per barang: 77250 / 600 = 128.75 (dibulatkan ke bawah menjadi 128)
- Jumlah barang yang dapat dibeli adalah 35 + 128 = 163
- Sisa uang 77250 - (128 * 600) = 450

#### Test Case 2

Input:

```text
parameter 1: quantity
parameter 2: 100
```

Output:

```text
Jumlah uang yang harus dibayarkan untuk order 100 adalah 61750!
```

Explanation:

- Parameter `type` bernilai `quantity`, maka function `bulkOrderCalculator` akan melakukan perhitungan berdasarkan jumlah barang yang akan dibeli dan akan memanggil function helper `calcByQuantity`.
- Parameter `data` bernilai 100, maka function `bulkOrderCalculator` akan memanggil function helper `calcByQuantity` dengan parameter `quantity` bernilai 100.
- 35 barang pertama menggunakan harga 650 per barang: 35 \* 650 = 22750
- Barang ke 36 dan 100 menggunakan harga 600 per barang: (100 - 35) \* 600 = 39000
- Jumlah uang yang harus dibayarkan adalah 22750 + 39000 = 61750

#### Test Case 3

Input:

```text
parameter 1: money
parameter 2: 100
```

Output:

```text
Uang sebesar 100 tidak cukup untuk membeli barang!
```

Explanation:

- Parameter `type` bernilai `money`, maka function `bulkOrderCalculator` akan melakukan perhitungan berdasarkan jumlah uang yang dimiliki dan akan memanggil function helper `calcByMoney`.
- Parameter `data` bernilai 100, maka function `bulkOrderCalculator` akan memanggil function helper `calcByMoney` dengan parameter `money` bernilai 100.
- Jumlah uang yang dimiliki < 650, maka uang tidak cukup untuk membeli barang.

#### Test Case 4

Input:

```text
parameter 1: money
parameter 2: 1300
```

Output:

```text
Jumlah barang yang dapat dibeli adalah 2, uang habis!
```

Explanation:

- Parameter `type` bernilai `money`, maka function `bulkOrderCalculator` akan melakukan perhitungan berdasarkan jumlah uang yang dimiliki dan akan memanggil function helper `calcByMoney`.
- Parameter `data` bernilai 1300, maka function `bulkOrderCalculator` akan memanggil function helper `calcByMoney` dengan parameter `money` bernilai 1300.
- 2 barang pertama menggunakan harga 650 per barang: 2 \* 650 = 1300
- Jumlah uang yang tersisa 0, maka uang habis.
