function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);
  
    return result;
}

function studentStatus(name, studentId) {
    const prodiMap = {
        "21": "Ekonomi",
        "22": "Manajemen",
        "23": "Akuntansi",
        "31": "Administrasi Publik",
        "32": "Administrasi Bisnis",
        "33": "Hubungan Internasional",
        "41": "Teknik Sipil",
        "42": "Arsitektur",
        "51": "Matematika",
        "52": "Fisika",
        "53": "Informatika"
    }

    const fakultasMap = {
        "FTIS": "Fakultas Teknologi Informasi dan Sains",
        "FISIP": "Fakultas Ilmu Sosial dan Politik",
        "FT": "Fakultas Teknik",
        "": "Fakultas Ekonomi"
    }

    let namaProdi = "";
    const prodiCode = (studentId.slice(-6)).slice(0, 2);
    switch(prodiCode) {
        case "21":
        case "22":
        case "23":
        case "31":
        case "32":
        case "33":
        case "41":
        case "42":
        case "51":
        case "52":
        case "53":
            namaProdi = prodiMap[prodiCode];
            break;
        default:
            namaProdi = "";
    }

    let namaFakultas = fakultasMap[studentId.substring(0, 4)] || 
                        fakultasMap[studentId.substring(0, 5)] || 
                        fakultasMap[studentId.substring(0, 2)] || 
                        fakultasMap[""];
    
    const tahunMasukArr = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000"];

    let tahunMasuk = tahunMasukArr.find(tahun => studentId.includes(tahun)) + ".";

    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${namaProdi} pada ${namaFakultas} sejak tahun ${tahunMasuk}`
}

if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;