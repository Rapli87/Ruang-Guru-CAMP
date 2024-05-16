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

const PlanetDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://swapi.py4e.com/api/planets";

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
          {Object.entries(detail || {}).map(([key, value]) => (
            <Box key={key}>
              <Heading as="h2" size="md">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Heading>
              <Text>{value}</Text>
            </Box>
          ))}
        </VStack>
      ) : (
        <Text size="md">Loading...</Text>
      )}
    </Container>
  );
};

export default PlanetDetail;
