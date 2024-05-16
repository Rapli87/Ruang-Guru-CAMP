import React, { useEffect, useState } from "react";

const Starship = () => {
  const [starships, setStarships] = useState(null);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/starships")
      .then((response) => response.json())
      .then((data) => setStarships(data.results))
      .catch((error) => console.log(error));
  }, []);

  if (!starships) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {starships.map((starship, index) => (
        <div key={index}>
          <h3>{starship.name}</h3>
          <p>
            <strong>Model:</strong> {starship.model}
          </p>
          <p>
            <strong>Manufacturer:</strong> {starship.manufacturer}
          </p>
          <p>
            <strong>Crew:</strong> {starship.crew}
          </p>
          <p>
            <strong>Passengers:</strong> {starship.passengers}
          </p>
          <p>
            <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
          </p>
          <p>
            <strong>Starship Class:</strong> {starship.starship_class}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Starship;
