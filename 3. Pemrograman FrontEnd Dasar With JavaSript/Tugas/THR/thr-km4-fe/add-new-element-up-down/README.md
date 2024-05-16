# Add New Element Up & Down

## Description

Buatlah sebuah fungsi yang akan menerima sebuah array dan akan mengembalikan array baru yang merupakan hasil penambahan element baru di awal atau di akhir array tersebut.

Function akan menerima 3 parameter, yaitu:

- `array` (array) - array yang akan ditambahkan element baru
- `element` (any) - element baru yang akan ditambahkan ke dalam array
- `position` (string) - posisi element baru yang akan ditambahkan ke dalam array, bisa berupa `up` atau `down`

Jika `position` adalah `up`, maka element baru akan ditambahkan di awal array. Jika `position` adalah `down`, maka element baru akan ditambahkan di akhir array.

## Constraints

- `array` tidak akan kosong
- `array` bisa berisi tipe data apapun
- `position` hanya bisa berupa `up` atau `down`

## Example

```text
input: [1, 2, 3, 4, 5], 6, 'up'
output: [6, 1, 2, 3, 4, 5]

input: [1, 2, 3, 4, 5], 6, 'down'
output: [1, 2, 3, 4, 5, 6]

input: ["Edo", "Budi", "Joko", "Tono"], "Rudi", 'up'
output: ["Rudi", "Edo", "Budi", "Joko", "Tono"]

input: ["Edo", "Budi", "Joko", "Tono"], "Rudi", 'down'
output: ["Edo", "Budi", "Joko", "Tono", "Rudi"]
```

## Hint

- Gunakan `unshift` dan `push` untuk menambah element di awal dan di akhir array
