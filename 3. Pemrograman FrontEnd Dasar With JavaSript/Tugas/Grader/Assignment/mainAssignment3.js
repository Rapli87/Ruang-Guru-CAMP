function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];

    return {}; // TODO: replace this
}

function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];

    return ''; // TODO: replace this
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};
