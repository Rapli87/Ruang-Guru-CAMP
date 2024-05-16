# Animal Classification

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh
Mentor. Dengan penjelasan sebagai berikut:

- **Durasi**: 20 menit pengerjaan
- **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
- **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan
  Live Coding.

---

### Description

`animalClassification` adalah sebuah function yang menerima satu parameter berupa object `criteria` yang terdiri dari
key `classification` dan `value`.

Function ini akan mengembalikan sebuah array of string yang berisi nama-nama hewan yang memiliki `criteria` yang cocok
dengan parameter yang diberikan.

Ada 4 jenis `classification` yang ada, yaitu:

- `classification` berdasarkan `food`:
  - `carnivore` (hewan pemakan daging)
  - `herbivore` (hewan pemakan tumbuhan)
  - `omnivore` (hewan pemakan daging dan tumbuhan)
- `classification` berdasarkan `type`:
  - `mammal` (hewan mamalia)
  - `bird` (hewan burung)
  - `reptile` (hewan reptil)
  - `amphibian` (hewan amfibi)
  - `fish` (hewan ikan)
- `classification` berdasarkan kemampuan untuk terbang atau tidak `canFly`:
  - `true` (hewan yang bisa terbang)
  - `false` (hewan yang tidak bisa terbang)
- `classification` berdasarkan kemampuan untuk berenang atau tidak `canSwim`:
  - `true` (hewan yang bisa berenang)
  - `false` (hewan yang tidak bisa berenang)

Sudah diberikan daftar `animals` berupa array of object yang berisi nama-nama hewan beserta data `classification`-nya.

Contoh format object `animal` adalah sebagai berikut:

```js
{
  name: "Lion",
  classification: {
    food: "carnivore",
    type: "mammal",
    canFly: false,
    liveInWater: false,
  },
}
```

---

### Constraints

- function `animalClassification` dipastikan akan menerima parameter berupa object `criteria` dengan key
  `classification` dan `value`.
- Untuk classification berdasarkan `food` dan `type` akan selalu bertipe data `string`
- Untuk classification berdasarkan `canFly` dan `canSwim` akan selalu bertipe data `boolean`.
- function `animalClassification` dipastikan akan menerima parameter dengan `classification` dan `value` yang valid.

---

### Test Case Examples

#### Test Case 1

Input

```text
parameter: { classification: 'food', value: 'carnivore' }
```

Output

```js
[
  'Lion',
  'Shark',
  'Eagle',
  'Salmon',
  'Whale',
  'Dolphin',
  'Cat',
  'Dog',
  'Penguin',
  'Squid',
  'Octopus',
  'Tiger',
  'Lizard',
  'Snake',
  'Crocodile',
  'Alligator',
  'Frog',
  'Toad',
  'Salamander',
];
```

explaination:

function `animalClassification` menerima parameter `{ classification: 'food', value: 'carnivore' }` yang berarti
function akan mengembalikan array of string yang berisi nama-nama hewan yang memiliki classification `food` dengan value
`carnivore`.

Sebagai contoh jika kita lihat object `animal` dengan nama `Lion`, maka `Lion` memiliki classification `food` dengan
value `carnivore`. Sehingga `Lion` akan dimasukkan ke dalam array of string yang akan di return oleh function
`animalClassification`, dan begitu seterusnya.

---

#### Test Case 2

Input

```text
parameter: { classification: 'type', value: 'mammal' }
```

Output

```js
['Lion', 'Whale', 'Dolphin', 'Cat', 'Dog', 'Cow', 'Tiger', 'Elephant', 'Giraffe', 'Hippo', 'Rhinoceros'];
```

Explanation:

function `animalClassification` menerima parameter `{ classification: 'type', value: 'mammal' }` yang berarti function
akan mengembalikan array of string yang berisi nama-nama hewan yang memiliki classification `type` dengan value
`mammal`.

Sebagai contoh jika kita lihat object `animal` dengan nama `Dolphin`, maka `Dolphin` memiliki classification `type`
dengan value `mammal`. Sehingga `Dolphin` akan dimasukkan ke dalam array of string yang akan di return oleh function
`animalClassification`, dan begitu seterusnya.

---
