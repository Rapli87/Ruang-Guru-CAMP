import React, { useState } from "react";
import moment from "moment-timezone";

const App = () => {
  const currentTime = "01:00:00";
  const [timezone, setTimezone] = useState("");
  const [convertedTime, setConvertedTime] = useState("00:00:00");

  const handleTimezoneChange = (event) => {
    const selectedTimezone = event.target.value;
    setTimezone(selectedTimezone);

    if (selectedTimezone === "") {
      setConvertedTime("00:00:00");
    } else {
      const formattedTime = moment(currentTime, "HH:mm:ss");
      const converted = moment
        .tz(formattedTime, selectedTimezone)
        .format("HH:mm:ss");
      setConvertedTime(converted);
    }
  };

  return (
    <div>
      <h1>Time converter</h1>
      <h2>Current time: {currentTime}</h2>
      <h2>Converted time: {convertedTime}</h2>
      <form>
        <label>Convert to:</label>
        <select value={timezone} onChange={handleTimezoneChange}>
          <option value="">Select timezone</option>
          <option value="Asia/Tokyo">Tokyo</option>
          <option value="America/New_York">New York</option>
          <option value="Europe/Madrid">Madrid</option>
          <option value="Africa/Cairo">Cairo</option>
          <option value="Australia/Sydney">Sydney</option>
        </select>
      </form>
    </div>
  );
};

export default App;
