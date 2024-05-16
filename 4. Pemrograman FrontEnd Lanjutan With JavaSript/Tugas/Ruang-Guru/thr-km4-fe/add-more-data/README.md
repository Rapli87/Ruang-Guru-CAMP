# Add More Data

## Description

Buatlah sebuah fungsi yang akan menerima sebuah object dan akan mengembalikan object yang akan memiliki tambahan key-value baru.

Function akan menerima 3 parameter, yaitu:

- `object` (object) - object yang akan ditambahkan key-value baru
- `key` (string) - key baru yang akan ditambahkan ke dalam object
- `value` (any) - value baru yang akan ditambahkan ke dalam object

## Constraints

- `object` tidak akan kosong

## Example

```text
input: { name: 'Edo', age: 20 }, 'address', 'Jakarta'
output: { name: 'Edo', age: 20, address: 'Jakarta' }

input: { name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading']
output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

input: { name: 'Edo', age: 20 }, 'isMarried', false
output: { name: 'Edo', age: 20, isMarried: false }
```

## Hint

- Gunakan `Object.assign` untuk menambahkan key-value baru ke dalam object
- Alternatif lainnya dengan menggunakan spread operator, dot notation, atau bracket notation
