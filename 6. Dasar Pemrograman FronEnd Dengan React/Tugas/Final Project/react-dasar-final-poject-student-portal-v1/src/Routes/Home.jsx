import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex">
      <div className="card">
        <div className="box">
          <h2>Student Independen Kampus Merdezka</h2>
        </div>
        <div className="box">
          <button>
            <Link
              to="/student"
              data-testid="student-btn"
              style={{ textDecoration: "none", color: "black" }}
            >
              All Student
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
