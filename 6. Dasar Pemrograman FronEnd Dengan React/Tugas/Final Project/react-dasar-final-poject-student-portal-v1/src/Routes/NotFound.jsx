import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>404 | Not Found</h2>
      <button onClick={handleGoBack} data-testid="back">
        Back
      </button>
    </>
  );
};

export default NotFound;
