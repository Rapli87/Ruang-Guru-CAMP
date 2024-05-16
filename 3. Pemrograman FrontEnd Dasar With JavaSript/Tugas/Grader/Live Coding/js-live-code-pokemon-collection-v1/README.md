# Pokemon Collection

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh Mentor. Dengan penjelasan sebagai berikut:

- **Durasi**: 20 menit pengerjaan
- **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
- **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan Live Coding.

---

### Description

`findPokemons` adalah sebuah function yang menerima satu parameter berupa object `criteria` yang terdiri dari key `searchBy` dan `value`.

Function ini akan mengembalikan sebuah array of string yang berisi nama-nama pokemon yang memiliki `criteria` yang cocok dengan parameter yang diberikan.

Ada 5 jenis `searchBy` yang ada, yaitu:

- `searchBy` berdasarkan `type`:
  - Pokemon memiliki 1 `type`
  - ada 5 `type` yang valid: `fire`, `grass`, `water`, `normal`, `electric`
- `searchBy` berdasarkan `hp`:
  - Pokemon memiliki `hp` antara 35 hingga 60
  - `hp` yg valid 35, 40, 45, 50, 55, atau 60.
- `searchBy` berdasarkan `attack`:
  - Pokemon memiliki `attack` antara 45 hingga 70
  - setiap nilai pada rentang `attack` harus memiliki selisih 5
  - `attack` yg valid 45, 50, 55, 60, 65, atau 70.
- `searchBy` berdasarkan `defense`:

  - Pokemon memiliki `defense` antara 45 hingga 65
  - setiap nilai pada rentang `defense` harus memiliki selisih 5
  - `defense` yg valid 45, 50, 55, 60, 65.

- `searchBy` berdasarkan kemampuan untuk terbang `isFlying`:
  - Pokemon memiliki kemampuan untuk terbang atau tidak
  - `isFlying` hanya memiliki 2 value: `true` atau `false`

list `pokemon` berupa array of object yang berisi nama-nama pokemon beserta `details`-nya.

Contoh format object `pokemon` adalah sebagai berikut:

```js
{
  name: 'Charizard',
  data: {
    type: 'fire',
    hp: 60,
    attack: 70,
    defense: 65,
    isFlying: true,
  }
}
```

---

### Constraints

- function `findPokemons` dipastikan akan menerima parameter berupa object `criteria` dengan key `searchBy` dan `value`.
- function `findPokemons` dipastikan akan menerima parameter dengan `searchBy` dan `value` yang valid.

---

### Test Case Examples

#### Test Case 1

Input

```text
parameter: { searchBy: 'type', value: 'fire' }
```

Output

```js
['Charizard', 'Rapidash', 'Magmar', 'Growlithe', 'Vulpix', 'Ponyta'];
```

explaination:

function `findPokemons` menerima parameter `{ searchBy: 'type', value: 'fire' }` yang berarti function akan mengembalikan array of string yang berisi nama-nama pokemon yang memiliki detail `type`
dengan value `fire`.

Sebagai contoh jika kita lihat object `pokemon` dengan nama `Charizard`, maka `Charizard` memiliki details `type` dengan value `'fire'`. Sehingga `Charizard` akan dimasukkan ke dalam array of string
yang akan di return oleh function `findPokemons`, dan begitu seterusnya.

---

#### Test Case 2

Input

```text
parameter: { searchBy: 'hp', value: 40 }
```

Output

```js
['Vulpix', 'Treecko', 'Voltorb'];
```

explaination:

function `findPokemons` menerima parameter `{ searchBy: 'hp', value: 40 }` yang berarti function akan mengembalikan array of string yang berisi nama-nama pokemon yang memiliki detail `hp` sama
dengan 40.

Sebagai contoh jika kita lihat object `pokemon` dengan nama `Vulpix`, maka `Vulpix` memiliki details `hp` dengan value `40`. Sehingga `Vulpix` akan dimasukkan ke dalam array of string yang akan di
return oleh function `findPokemons`, dan begitu seterusnya.

---
