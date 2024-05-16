import React, { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  return <h1>{props.name}</h1>;
}

function Task2() {
  const [buttonText, setButtonText] = useState("Klik tombol di bawah");

  const handleClick = () => {
    setButtonText("Tombol telah di-klik!");
  };

  return (
    <div>
      <h1>{buttonText}</h1>
      <button onClick={handleClick}>Klik saya!</button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return (
    <div>
      {/* <h2>Daftar Siswa:</h2> */}
      {students.map((student) => (
        <h2 key={student.name}>
          {student.name} - {student.age}
        </h2>
      ))}
    </div>
  );
}

function Task3_1() {
  const filteredStudents = students.filter((student) => !student.dropout);

  return (
    <div>
      {/* <h2>Daftar Siswa (Tanpa Dropout):</h2> */}
      {filteredStudents.map((student) => (
        <h2 key={student.name}>
          {student.name} - {student.age}
        </h2>
      ))}
    </div>
  );
}

function Task4() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
      <button onClick={handleClick}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
