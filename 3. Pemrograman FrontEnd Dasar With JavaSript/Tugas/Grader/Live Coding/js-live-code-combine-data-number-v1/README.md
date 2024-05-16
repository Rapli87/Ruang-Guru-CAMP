# Combine Data Number

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh Mentor. Dengan penjelasan sebagai berikut:

- **Durasi**: 20 menit pengerjaan
- **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
- **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan Live Coding.

---

### Description

`combineData` adalah sebuah function yang menerima dua parameter.

Parameter ini bisa bertipe data `string` ataupun `number`. Funtion ini akan memproses kedua parameter tersebut dan mengembalikan sebuah `string` dengan format sebagai berikut:

```text
  "Parameter Pertama:<parameter pertama> & Parameter Kedua:<parameter kedua> - Hasil Proses= <Hasil Proses>"
```

`Hasil Proses` adalah hasil dari penggabungan kedua parameter tersebut dengan ketentuan sebagai berikut:

- Jika kedua parameter tersebut bertipe data `number`, maka `Hasil Proses` adalah hasil penjumlahan kedua parameter tersebut.

Namun jika kedua parameter tersebut ada yang tidak bertipe data `number`, maka function akan mengembalikan `string` dengan format sebagai berikut:

```text
  "Invalid Parameter"
```

---

### Constraints

- function `combineData` dipastikan akan menerima dua parameter.
- Parameter dengan tipe data `string` memiliki panjang karakter minimal 3 karakter dan maksimal 20 karakter.
- Parameter dengan tipe data `number` memiliki nilai minimal -100 dan maksimal 100.

---

### Test Case Examples

#### Test Case 1

Input

```text
parameter pertama: 2023
parameter kedua: 2023
```

Output

```text
Parameter Pertama:2023 & Parameter Kedua:2023 - Hasil Proses= 4046
```

Explanation

- Parameter pertama bertipe data `number` dengan nilai 2023.
- Parameter kedua bertipe data `number` dengan nilai 2023.
- Hasil Proses adalah hasil penjumlahan kedua parameter tersebut, yaitu 2023 + 2023 = 4046.
- Output yang diharapkan adalah `Parameter Pertama:2023 & Parameter Kedua:2023 - Hasil Proses= 4046`.

---

#### Test Case 2

Input

```text
parameter pertama: "Ruangguru"
parameter kedua: 2023
```

Output

```text
Invalid Parameter
```

Explanation

- Parameter pertama bertipe data `string` dengan nilai "Ruangguru".
- Parameter kedua bertipe data `number` dengan nilai 2023.
- Karena salah satu parameter tidak bertipe data `number`, maka function akan mengembalikan `string` dengan format `Invalid Parameter`.

---

#### Test Case 3

Input

```text
parameter pertama: -5
parameter kedua: -10
```

Output

```text
Parameter Pertama:-5 & Parameter Kedua:-10 - Hasil Proses= -15
```

Explanation

- Parameter pertama bertipe data `number` dengan nilai -5.
- Parameter kedua bertipe data `number` dengan nilai -10.
- Hasil Proses adalah hasil penjumlahan kedua parameter tersebut, yaitu -5 + -10 = -15.
- Output yang diharapkan adalah `Parameter Pertama:-5 & Parameter Kedua:-10 - Hasil Proses= -15`.

---

#### Test Case 4

Input

```text
parameter pertama: "Ruang"
parameter kedua: 2023
```

Output

```text
Invalid Parameter
```

Explanation

- Parameter pertama bertipe data `string` dengan nilai "Ruang".
- Parameter kedua bertipe data `number` dengan nilai 2023.
- Karena salah satu parameter tidak bertipe data `number`, maka function akan mengembalikan `string` dengan format `Invalid Parameter`.

---
