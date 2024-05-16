function travelDiscount(id, amount) {
    let status = '';
    let price = 0;
    let discount = 0;
    
    if (id.includes('STD')) {
        status = 'STUDENT';
        price = 20000;
        if (amount > 20) {
        discount = 0.2;
        }
    } else if (id.includes('CORP')) {
        status = 'CORPORATE';
        price = 50000;
        if (amount > 30) {
        discount = 0.25;
        }
    } else {
        return "Maaf, voucher yang anda miliki tidak valid!";
    }
    
    let totalPrice = price * amount * (1 - discount);
    
    return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}.`;
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount

/* Fungsi travelDiscount menerima dua parameter yaitu id dan amount yang merepresentasikan id voucher dan jumlah penumpang yang akan melakukan perjalanan.

Fungsi akan memproses status voucher dan menentukan harga dan diskon berdasarkan aturan yang telah ditentukan. Jika id voucher tidak valid, maka fungsi akan mengembalikan pesan kesalahan.

Setelah harga dan diskon ditentukan, fungsi akan menghitung total harga dengan menggunakan rumus totalPrice = price * amount * (1 - discount).

Terakhir, fungsi akan mengembalikan pesan dengan format yang telah ditentukan berisi informasi tentang status voucher, id voucher, dan total harga yang harus dibayarkan.*/
