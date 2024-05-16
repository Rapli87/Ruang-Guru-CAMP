import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import peopleThumbnail from "../assets/people.jpeg";
import BackButton from "../components/BackButton";
import { Text, HStack, Box, Container, Heading } from "@chakra-ui/react";

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://swapi.py4e.com/api/people";

  useEffect(() => {
    const loadPeople = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    loadPeople();
  }, []);

  const getID = (url) => {
    const parsed = url?.split("/");
    return parsed[parsed.length - 2];
  };

  return (
    <Container>
      <HStack direction="row" marginTop={5} marginBottom={5}>
        <BackButton />
        <Heading as="h1" size="xl">
          People
        </Heading>
      </HStack>
      {!loading ? (
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap={4}>
          {people.map((person, index) => {
            const id = getID(person.url);
            return (
              <div key={index}>
                <Link to={`/star-wars/people/${id}`}>{person.name}</Link>
              </div>
            );
          })}
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default People;
