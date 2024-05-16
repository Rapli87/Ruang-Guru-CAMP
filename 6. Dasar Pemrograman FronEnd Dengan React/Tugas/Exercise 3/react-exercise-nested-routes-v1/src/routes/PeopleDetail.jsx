import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import {
  Text,
  HStack,
  Box,
  VStack,
  Container,
  Heading,
} from "@chakra-ui/react";

const PeopleDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://swapi.py4e.com/api/people";

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    loadDetail();
  }, [id]);

  const fields = [
    { label: "Gender", key: "gender" },
    { label: "Birth Year", key: "birth_year" },
    { label: "Mass", key: "mass" },
    { label: "Height", key: "height" },
    { label: "Eye Color", key: "eye_color" },
  ];

  return (
    <Container>
      <HStack direction="row" marginTop={5} marginBottom={5}>
        <BackButton />
        <Heading as="h1" size="xl">
          {detail?.name}
        </Heading>
      </HStack>

      {!loading ? (
        <VStack alignItems="start">
          {fields.map((field) => (
            <Box key={field.key}>
              <Heading as="h2" size="md">
                {field.label}
              </Heading>
              <Text>{detail?.[field.key]}</Text>
            </Box>
          ))}
        </VStack>
      ) : (
        <Text size="md">Loading...</Text>
      )}
    </Container>
  );
};

export default PeopleDetail;
