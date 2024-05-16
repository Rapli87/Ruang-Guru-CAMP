import React from "react";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullname"
        placeholder="Fullname"
        data-testid="name"
        required
      />
      <input
        type="date"
        name="birthDate"
        placeholder="Birth Date"
        data-testid="date"
        required
      />
      <select name="gender" data-testid="gender" required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select name="programStudy" data-testid="prody" required>
        <option value="">Select Program Study</option>
        <option value="Ekonomi">Ekonomi</option>
        <option value="Manajemen">Manajemen</option>
        <option value="Akuntansi">Akuntansi</option>
        <option value="Administrasi Publik">Administrasi Publik</option>
        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
        <option value="Hubungan Internasional">Hubungan Internasional</option>
        <option value="Teknik Sipil">Teknik Sipil</option>
        <option value="Arsitektur">Arsitektur</option>
        <option value="Matematika">Matematika</option>
        <option value="Fisika">Fisika</option>
        <option value="Informatika">Informatika</option>
      </select>
      <button type="submit" data-testid="submit">
        Add Student
      </button>
    </form>
  );
};

export default Form;
