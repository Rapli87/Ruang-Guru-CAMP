import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const students = [
    {
      id: 1,
      fullname: "Djarot Purnomo",
      birthDate: "1993-10-28",
      gender: "Male",
      faculty: "Fakultas Ilmu Sosial dan Politik",
      programStudy: "Administrasi Bisnis",
    },
    {
      id: 2,
      fullname: "Rakanda Pangeran Nasution",
      birthDate: "1992-07-26",
      gender: "Male",
      faculty: "Fakultas Ilmu Sosial dan Politik",
      programStudy: "Administrasi Publik",
    },
    {
      id: 3,
      fullname: "Anshori Atmodiredjo",
      birthDate: "1996-11-01",
      gender: "Male",
      faculty: "Fakultas Teknologi Informasi dan Sains",
      programStudy: "Informatika",
    },
    {
      id: 4,
      fullname: "Angelia",
      birthDate: "1996-06-17",
      gender: "Female",
      faculty: "Fakultas Ilmu Sosial dan Politik",
      programStudy: "Administrasi Publik",
    },
    {
      id: 5,
      fullname: "Tuti Marsinah",
      birthDate: "1998-03-11",
      gender: "Female",
      faculty: "Fakultas Ekonomi",
      programStudy: "Ekonomi",
    },
    {
      id: 6,
      fullname: "Edizon",
      birthDate: "1982-01-31",
      gender: "Male",
      faculty: "Fakultas Ekonomi",
      programStudy: "Ekonomi",
    },
    {
      id: 7,
      fullname: "Vony Merdiana",
      birthDate: "1991-05-21",
      gender: "Female",
      faculty: "Fakultas Teknik",
      programStudy: "Teknik Sipil",
    },
    {
      id: 8,
      fullname: "Dea Christy Keliat",
      birthDate: "1994-02-27",
      gender: "Female",
      faculty: "Fakultas Ilmu Sosial dan Politik",
      programStudy: "Hubungan Internasional",
    },
    {
      id: 9,
      fullname: "Sekarini Mahyaswari",
      birthDate: "1996-02-01",
      gender: "Female",
      faculty: "Fakultas Ilmu Sosial dan Politik",
      programStudy: "Hubungan Internasional",
    },
    {
      id: 10,
      fullname: "Annisa Tahira",
      birthDate: "1996-09-01",
      gender: "Female",
      faculty: "Fakultas Teknologi Informasi dan Sains",
      programStudy: "Informatika",
    },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <Form />
      <Table students={students} />
    </div>
  );
};

export default App;
