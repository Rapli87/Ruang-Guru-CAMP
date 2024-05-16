import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching students:", error);
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newStudent = {
      id: students.length + 1,
      fullname: formData.get("fullname"),
      birthDate: formData.get("birthDate"),
      gender: formData.get("gender"),
      programStudy: formData.get("programStudy"),
    };

    let faculty = "";
    switch (newStudent.programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
        faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        faculty = "";
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newStudent,
        faculty: faculty,
      }),
    };

    fetch("http://localhost:3001/student", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setStudents((prevStudents) => [...prevStudents, data]);
        event.target.reset();
        fetchStudents();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="border rounded-xl border-amber-700">
        <Form handleSubmit={handleSubmit} />
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Table students={students} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default App;
