import { useState } from "react";
import NavBar from "../components/Navbar";

const AddStudent = (props) => {
  const [getFullName, setFullName] = useState("");
  const [getPicture, setPicture] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getDate, setDate] = useState("");
  const [getGender, setGender] = useState("");
  const [getPrody, setPrody] = useState("");

  const addStudent = async (e) => {
    e.preventDefault();
    const tempData = {
      fullname: getFullName,
      profilePicture: getPicture,
      address: getAddress,
      birthDate: getDate,
      gender: getGender,
      phoneNumber: getPhone,
      faculty: "",
      programStudy: getPrody,
    };
    const prodi = tempData["programStudy"];

    if (prodi === "Ekonomi" || prodi === "Akuntansi" || prodi === "Manajemen") {
      tempData["faculty"] = "Fakultas Ekonomi";
    } else if (
      prodi === "Administrasi Bisnis" ||
      prodi === "Administrasi Publik" ||
      prodi === "Hubungan Internasional"
    ) {
      tempData["faculty"] = "Fakultas Ilmu Sosial dan Politik";
    } else if (prodi === "Teknik Sipil" || prodi === "Arsitektur") {
      tempData["faculty"] = "Fakultas Teknik";
    } else {
      tempData["faculty"] = "Fakultas Teknologi Informasi dan Sains";
    }

    props.createStudent(tempData);

    setFullName("");
    setDate("");
    setGender("");
    setPrody("");
    setAddress("");
    setPicture("");
    setPhone("");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="card-form" id="form-student">
          <form onSubmit={addStudent}>
            <div className="label-input">
              <label htmlFor="input-name">Fullname</label>
              <input
                type="text"
                data-testid="name"
                id="input-name"
                onChange={({ target }) => setFullName(target.value)}
                value={getFullName}
              />
            </div>
            <div className="label-input">
              <div className="input-doubel">
                <div className="col-inp">
                  <label htmlFor="input-picture">Profile Picture</label>
                  <input
                    type="text"
                    style={{ width: "90%" }}
                    id="input-picture"
                    data-testid="profilePicture"
                    onChange={({ target }) => setPicture(target.value)}
                    value={getPicture}
                  />
                </div>
                <div className="col-inp">
                  <label htmlFor="input-address">Address</label>
                  <input
                    type="text"
                    data-testid="address"
                    onChange={({ target }) => setAddress(target.value)}
                    value={getAddress}
                  />
                </div>
              </div>
            </div>
            <div className="label-input">
              <div className="input-doubel">
                <div className="col-inp">
                  <label htmlFor="input-phone">Phone Number</label>
                  <input
                    type="text"
                    id="input-phone"
                    data-testid="phoneNumber"
                    style={{ width: "90%" }}
                    onChange={({ target }) => setPhone(target.value)}
                    value={getPhone}
                  />
                </div>
                <div className="col-inp">
                  <label htmlFor="input-date">Birth Date</label>
                  <input
                    type="date"
                    id="input-date"
                    data-testid="date"
                    onChange={({ target }) => setDate(target.value)}
                    value={getDate}
                  />
                </div>
              </div>
            </div>
            <div className="label-input">
              <label htmlFor="input-gender">Gender</label>
              <select
                className="input-select"
                id="input-gender"
                data-testid="gender"
                onChange={({ target }) => setGender(target.value)}
                value={getGender}
              >
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="label-input">
              <label htmlFor="input-prody">Program Study</label>
              <select
                className="input-select"
                data-testid="prody"
                id="input-prody"
                onChange={({ target }) => setPrody(target.value)}
                value={getPrody}
              >
                <option></option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">
                  Hubungan Internasional
                </option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </select>
            </div>
            <div className="label-input">
              <input
                type="submit"
                value={"Add student"}
                id="add-btn"
                className="btn-add"
                data-testid="add-btn"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
