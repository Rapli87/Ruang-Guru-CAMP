import React, { useEffect, useState } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/planets")
      .then((response) => response.json())
      .then((data) => setPlanets(data.results))
      .catch((error) => console.log(error));
  }, []);

  if (!planets) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {planets.map((planet, index) => (
        <div key={index}>
          <h3>{planet.name}</h3>
          <p>
            <strong>Rotation Period:</strong> {planet.rotation_period}
          </p>
          <p>
            <strong>Orbital Period:</strong> {planet.orbital_period}
          </p>
          <p>
            <strong>Terrain:</strong> {planet.terrain}
          </p>
          <p>
            <strong>Population:</strong> {planet.population}
          </p>
          <p>
            <strong>Climate:</strong> {planet.climate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Planets;
