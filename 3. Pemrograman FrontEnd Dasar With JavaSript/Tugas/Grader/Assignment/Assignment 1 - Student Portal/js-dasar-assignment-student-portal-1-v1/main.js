function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {

    const gpaNum = parseFloat(gpa);

    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4) {
        return "Invalid gpa number";
    }

    let maxSks;
    if (gpaNum > 2.99) {
        maxSks = 24;
    } else if (gpaNum >= 2.5) {
        maxSks = 21;
    } else if (gpaNum >= 2) {
        maxSks = 18;
    } else if (gpaNum >= 1.5) {
        maxSks = 15;
    } else {
        maxSks = 12;
    }

    let message;
    if (gpaNum >= 3) {
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${maxSks} SKS untuk semester depan.`;
    } else {
        let prodi;
        switch (programId) {
            case "ACC":
                prodi = "Akuntansi"
                break;
            case "HIN":
                prodi = "Hubungan Internasional";
                break;
            case "IAB":
                prodi = "Ilmu Administrasi Bisnis";
                break;
            case "IAP":
                prodi = "Ilmu Administrasi Publik";
                break;
            case "MJN":
                prodi = "Manajemen";
                break;
            case "TKM":
                prodi = "Teknik Kimia";
                break;
            default:
                prodi = "Program Studi yang tidak valid";
        }
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${prodi} dan hanya dapat mengambil SKS sebanyak ${maxSks} SKS untuk semester depan.`;
    }
    return message;
}

console.log(krsApplication("Joel", "IAB", "3"));// output: Hallo Joel, berdasarkan IP semester lalu sebesar 3, kamu dapat mengambil SKS sebanyak 24 SKS untuk semester depan.
console.log(krsApplication("Ellie", "HIN", "2.2"));// output: Hallo Ellie, berdasarkan IP semester lalu sebesar 2.2, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Hubungan Internasional dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.
console.log(krsApplication("Tommy", "ACC", "4.1"));// output: Invalid gpa number

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
