import React, { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/people")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.log(error));
  }, []);

  if (!people) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <h3>{person.name}</h3>
          <p>
            <strong>Gender:</strong> {person.gender}
          </p>
          <p>
            <strong>Birth Year:</strong> {person.birth_year}
          </p>
          <p>
            <strong>Mass:</strong> {person.mass}
          </p>
          <p>
            <strong>Height:</strong> {person.height}
          </p>
          <p>
            <strong>Eye Color:</strong> {person.eye_color}
          </p>
        </div>
      ))}
    </div>
  );
};

export default People;
