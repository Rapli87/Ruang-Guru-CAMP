import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Text, HStack, Box, Container, Heading } from "@chakra-ui/react";

const MovieDetail = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const BASE_URL = "https://swapi.py4e.com/api/films";

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
          {detail?.title}
        </Heading>
      </HStack>

      {!loading ? (
        <Box>
          <Box marginBottom={4}>
            <Heading as="h2" size="md">
              Release Date
            </Heading>
            <Text>{detail?.release_date}</Text>
          </Box>
          <Box marginBottom={4}>
            <Heading as="h2" size="md">
              Produced By
            </Heading>
            <Text>{detail?.producer}</Text>
          </Box>
          <Box marginBottom={4}>
            <Heading as="h2" size="md">
              Directed By
            </Heading>
            <Text>{detail?.director}</Text>
          </Box>
          <Box marginBottom={4}>
            <Heading as="h2" size="md">
              Summary
            </Heading>
            <Text>{detail?.opening_crawl}</Text>
          </Box>
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default MovieDetail;
