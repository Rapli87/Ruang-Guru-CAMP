function process_argv() {
  const { argv } = process;
  const result = studentData(argv[2], argv[3]);

  return result;
}

function studentData(name, studentId) {
  const facultyList = {
    21: ["Fakultas Ekonomi", "Ekonomi"],
    22: ["Fakultas Ekonomi", "Manajemen"],
    23: ["Fakultas Ekonomi", "Akuntansi"],
    31: ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
    32: ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
    33: ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
    41: ["Fakultas Teknik", "Teknik Sipil"],
    42: ["Fakultas Teknik", "Arsitektur"],
    51: ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
    52: ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
    53: ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
  };

  const prodiCode = studentId.substring(4, 6);
  const [faculty, prody] = facultyList[prodiCode] || ["", ""];

  if (!prody) {
    return "Invalid Student's ID";
  }

  const thesisLecturer = getLecturer(prody);

  return {
    id: studentId,
    name,
    prody,
    faculty,
    thesisLecturer,
  };
}

function getLecturer(prody) {
  const lecturerList = {
    "Administrasi Publik": "Dr. Ulbert Silalahi, Drs., MA.",
    Ekonomi: "Prof. Dr. Martinus Yuwana Marjuka, M.Si.",
    Informatika: "Dott. Thomas Anung Basuki, ST., MKom.",
    "Teknik Sipil": "Dr. Cecilia Lauw Giok Swan, Ir., M.T.",
    Manajemen: "Catharina Tan Lian Soei,Dra.,MM.",
    Arsitektur: "Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.",
    "Hubungan Internasional": "Sapta Dwikardana, Drs., M.Si., Ph.D.",
    "Administrasi Bisnis": "Agus, S.Sos., BAC., MBA., M.Phil",
    Matematika: "Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.",
    Fisika: "Liem Chin, SSi., MSi.",
    Akuntansi: "Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.",
  };

  return lecturerList[prody] || "";
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = {
  studentData,
  getLecturer,
};
