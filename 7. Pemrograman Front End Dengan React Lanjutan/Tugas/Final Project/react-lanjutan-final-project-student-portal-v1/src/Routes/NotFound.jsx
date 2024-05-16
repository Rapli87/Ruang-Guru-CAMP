import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>404 | Not Found</h2>
      <Button onClick={handleGoBack} data-testid="back">
        Back
      </Button>
    </>
  );
};

export default NotFound;
