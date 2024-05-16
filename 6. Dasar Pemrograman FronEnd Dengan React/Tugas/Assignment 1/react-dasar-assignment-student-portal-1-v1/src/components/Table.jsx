import React from "react";

const Table = ({ students }) => {
  if (!students || students.length === 0) {
    return (
      <table id="table-student">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7">No students available</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table id="table-student">
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.fullname}</td>
            <td>{student.birthDate}</td>
            <td>{student.gender}</td>
            <td>{student.faculty}</td>
            <td>{student.programStudy}</td>
            <td>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
