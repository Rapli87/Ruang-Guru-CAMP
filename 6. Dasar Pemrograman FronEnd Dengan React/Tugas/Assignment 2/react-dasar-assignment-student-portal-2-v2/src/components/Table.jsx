import React from "react";

const Table = ({ students, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fullname</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className="student-data-row">
            <td>{student.id}</td>
            <td>{student.fullname}</td>
            <td>{student.birthDate}</td>
            <td>{student.gender}</td>
            <td>{student.faculty}</td>
            <td>{student.programStudy}</td>
            <td>
              <button
                onClick={() => handleDelete(student.id)}
                data-testid={`delete-${student.id}`}
              >
                Delete Student
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
