import React, { useState } from "react";
import People from "./components/People";
import Planets from "./components/Planet";
import Starship from "./components/Starship";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("People");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="People">People</option>
        <option value="Planets">Planets</option>
        <option value="Starships">Starships</option>{" "}
        {/* Added "Starships" option */}
      </select>
      {selectedOption === "People" && <People />}
      {selectedOption === "Planets" && <Planets />}
      {selectedOption === "Starships" && <Starship />}{" "}
      {/* Updated component name */}
    </div>
  );
};

export default App;
