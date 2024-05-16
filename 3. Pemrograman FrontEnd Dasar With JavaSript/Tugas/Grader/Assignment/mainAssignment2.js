function process_argv() {
  const { argv } = process;
  const result = studentStatus(argv[2], argv[3]);

  return result;
}

function studentStatus(name, studentId) {
  let fakultas = "";
  let programstudi = "";
  let tahunmasuk = "";
  let nim = "";
  let namafakultas = "";
  let namaprogramstudi = "";

  if (studentId.substring(0, 2) === "FE") {
      fakultas = "FE";
      namafakultas = "Fakultas Ekonomi";
  } else if (studentId.substring(0, 4) === "FTIS") {
      fakultas = "FTIS";
      namafakultas = "Fakultas Teknologi Informasi dan Sains";
  } else if (studentId.substring(0, 5) === "FISIP") {
      fakultas = "FISIP";
      namafakultas = "Fakultas Ilmu Sosial dan Politik";
  } else {
      fakultas = "FT";
      namafakultas = "Fakultas Teknik";
  }


  if (studentId.substring(2, 6) === "2023") {
      tahunmasuk = "2023";
  } else if (studentId.substring(2, 6) === "2022") {
      tahunmasuk = "2022";
  } else if (studentId.substring(2, 6) === "2021") {
      tahunmasuk = "2021";
  } else if (studentId.substring(2, 6) === "2020") {
      tahunmasuk = "2020";
  } else if (studentId.substring(2, 6) === "2019") {
      tahunmasuk = "2019";
  } else if (studentId.substring(2, 6) === "2018") {
      tahunmasuk = "2018";
  } else if (studentId.substring(4, 8) === "2018") {
      tahunmasuk = "2018";
  } else if (studentId.substring(2, 6) === "2017") {
      tahunmasuk = "2017";
  } else if (studentId.substring(2, 6) === "2016") {
      tahunmasuk = "2016";
  } else if (studentId.substring(2, 6) === "2015") {
      tahunmasuk = "2015";
  } else if (studentId.substring(5, 9) === "2014") {
      tahunmasuk = "2014";
  } else if (studentId.substring(4, 8) === "2014") {
      tahunmasuk = "2014";
  } else if (studentId.substring(2, 6) === "2014") {
      tahunmasuk = "2014";
  } else if (studentId.substring(5, 9) === "2013") {
      tahunmasuk = "2013";
  } else if (studentId.substring(4, 8) === "2013") {
      tahunmasuk = "2013";
  } else if (studentId.substring(5, 9) === "2012") {
      tahunmasuk = "2012";
  } else if (studentId.substring(2, 6) === "2012") {
      tahunmasuk = "2012";
  } else if (studentId.substring(4, 8) === "2012") {
      tahunmasuk = "2012";
  } else if (studentId.substring(5, 9) === "2011") {
      tahunmasuk = "2011";
  } else if (studentId.substring(5, 9) === "2010") {
      tahunmasuk = "2010";
  } else if (studentId.substring(2, 6) === "2010") {
      tahunmasuk = "2010";
  } else if (studentId.substring(2, 6) === "2009") {
      tahunmasuk = "2009";
  } else if (studentId.substring(2, 6) === "2008") {
      tahunmasuk = "2008";
  } else if (studentId.substring(2, 6) === "2007") {
      tahunmasuk = "2007";
  } else if (studentId.substring(2, 6) === "2006") {
      tahunmasuk = "2006";
  } else if (studentId.substring(2, 6) === "2005") {
      tahunmasuk = "2005";
  } else if (studentId.substring(2, 6) === "2004") {
      tahunmasuk = "2004";
  } else if (studentId.substring(2, 6) === "2003") {
      tahunmasuk = "2003";
  } else if (studentId.substring(2, 6) === "2002") {
      tahunmasuk = "2002";
  } else if (studentId.substring(2, 6) === "2001") {
      tahunmasuk = "2001";
  } else if (studentId.substring(2, 6) === "2000") {
      tahunmasuk = "2000";
  }





  // } else if (studentId.substring(5, 9) === "2011") {
  //     tahunmasuk = "2011";
  // }


  if (studentId.substring(6, 8) === "21") {
      programstudi = "21";
      namaprogramstudi = "Ekonomi";
  } else if (studentId.substring(6, 8) === "22") {
      programstudi = "22";
      namaprogramstudi = "Manajemen";
  } else if (studentId.substring(6, 8) === "23") {
      programstudi = "23";
      namaprogramstudi = "Akuntansi";
  } else if (studentId.substring(9, 11) === "31") {
      programstudi = "31";
      namaprogramstudi = "Administrasi Publik";
  } else if (studentId.substring(9, 11) === "32") {
      programstudi = "32";
      namaprogramstudi = "Administrasi Bisnis";
  } else if (studentId.substring(9, 11) === "33") {
      programstudi = "33";
      namaprogramstudi = "Hubungan Internasional";
  } else if (studentId.substring(6, 8) === "41") {
      programstudi = "41";
      namaprogramstudi = "Teknik Sipil";
  } else if (studentId.substring(6, 8) === "42") {
      programstudi = "42";
      namaprogramstudi = "Arsitektur";
  } else if (studentId.substring(8, 10) === "51") {
      programstudi = "51";
      namaprogramstudi = "Matematika";
  } else if (studentId.substring(8, 10) === "52") {
      programstudi = "52";
      namaprogramstudi = "Fisika";
  } else if (studentId.substring(8, 10) === "53") {
      programstudi = "53";
      namaprogramstudi = "Informatika";
  }

  nim = studentId.substring(8, 12);

  return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${namaprogramstudi} pada ${namafakultas} sejak tahun ${tahunmasuk}.`;

}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = studentStatus;