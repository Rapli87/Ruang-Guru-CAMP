import React from "react";

const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  const fullName = name;
  const firstName = name.split(" ")[0];
  const status = isStudent ? "Student" : "Not student";

  return (
    <div>
      <p className="fullName">Name: {fullName}</p>
      <p className="firstName">First name: {firstName}</p>
      <p className="status">Status: {status}</p>
    </div>
  );
}

export default App;
export { Student };
