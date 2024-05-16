# Student Grouping

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh Mentor. Dengan penjelasan sebagai berikut:

- **Durasi**: 20 menit pengerjaan
- **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
- **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan Live Coding.

---

### Description

`studentGrouping` adalah sebuah function yang menerima satu parameter berupa object `criteria` yang terdiri dari key `groupBy` dan `value`.

Function ini akan mengembalikan sebuah array of string yang berisi nama-nama student yang memiliki `criteria` yang cocok dengan parameter yang diberikan.

Ada 5 jenis `groupBy` yang ada, yaitu:

- `groupBy` berdasarkan `age`:
  - semua siswa memiliki usia antara 18 hingga 20 tahun
  - Usia yg valid 18, 19, atau 20.
- `groupBy` berdasarkan `weight`:
  - berat badan dari 60 hingga 80 untuk setiap student
  - setiap nilai pada rentang berat badan harus memiliki selisih 5
  - Berat badan yg valid 65, 70, 75, atau 80.
- `groupBy` berdasarkan `height`:
  - tinggi badan dari 160 hingga 180 untuk setiap student
  - setiap nilai pada rentang tinggi badan harus memiliki selisih 5
  - Tinggi badan yg valid 165, 170, 175, atau 180.
- `groupBy` berdasarkan `hobby`:
  - semua siswa memiliki 1 `hobby`
  - ada 8 `hobby` yang valid: `reading`, `football`, `swimming`, `running`, `dancing`, `singing`, `cooking`, `drawing`
- `groupBy` berdasarkan `favoriteFood`:
  - semua siswa memiliki 1 `favoriteFood`
  - ada 8 `favoriteFood` yang valid: `pizza`, `pasta`, `burger`, `chicken`, `fish`, `meat`, `cheese`

list `students` berupa array of object yang berisi nama-nama student beserta `details`-nya.

Contoh format object `student` adalah sebagai berikut:

```js
{
  name: 'Ahmed',
  details: {
    age: 18,
    weight: 60,
    height: 160,
    hobby: 'football',
  }
}
```

---

### Constraints

- function `studentGrouping` dipastikan akan menerima parameter berupa object `criteria` dengan key `groupBy` dan `value`.
- function `studentGrouping` dipastikan akan menerima parameter dengan `groupBy` dan `value` yang valid.

---

### Test Case Examples

#### Test Case 1

Input

```text
parameter: { groupBy: 'age', value: 18 }
```

Output

```js
['Ahmed', 'Sara', 'Noura', 'Jawad', 'Mansour', 'Amina', 'Majid'];
```

explaination:

function `studentGrouping` menerima parameter `{ groupBy: 'age', value: 18 }` yang berarti function akan mengembalikan array of string yang berisi nama-nama student yang memiliki detail `age` dengan
value `18`.

Sebagai contoh jika kita lihat object `student` dengan nama `Ahmed`, maka `Ahmed` memiliki details `age` dengan value `18`. Sehingga `Ahmed` akan dimasukkan ke dalam array of string yang akan di
return oleh function `studentGrouping`, dan begitu seterusnya.

---

#### Test Case 2

Input

```text
parameter: { groupBy: 'weight', value: 65 }
```

Output

```js
['Mariam', 'Amina'];
```

explaination:

function `studentGrouping` menerima parameter `{ groupBy: 'weight', value: 65 }` yang berarti function akan mengembalikan array of string yang berisi nama-nama student yang memiliki detail `weight`
dengan value `65`.

Sebagai contoh jika kita lihat object `student` dengan nama `Mariam`, maka `Mariam` memiliki details `weight` dengan value `65`. Sehingga `Mariam` akan dimasukkan ke dalam array of string yang akan
direturn oleh function `studentGrouping`, dan begitu seterusnya.
