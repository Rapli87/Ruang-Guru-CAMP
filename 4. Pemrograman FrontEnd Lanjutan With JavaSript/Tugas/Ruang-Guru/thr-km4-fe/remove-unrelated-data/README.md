# Remove Unrelated Data

## Description

Buatlah sebuah fungsi yang akan menerima sebuah object dan akan mengembalikan object baru yang beberapa key-value-nya telah dihapus karena tidak relevan dengan object tersebut.

Function akan menerima 2 parameter, yaitu:

- `object` (object) - object yang akan dihapus key-value-nya
- `keys` (string) - key yang akan dihapus dari object

## Constraints

- `object` tidak akan kosong
- `keys` tidak akan kosong

## Example

```text
input: { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'address'
output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

input: { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'hobbies'
output: { name: 'Edo', age: 20, address: 'Jakarta' }

input: { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'name'
output: { age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }
```

## Hint

- Gunakan `delete` untuk menghapus key-value dari object
