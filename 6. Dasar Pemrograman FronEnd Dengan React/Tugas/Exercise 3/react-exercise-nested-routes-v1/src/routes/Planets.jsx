import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  SimpleGrid,
  CardBody,
  Text,
  Image,
  HStack,
  Container,
  Heading,
} from "@chakra-ui/react";

import planetsThumbnail from "../assets/planets.jpeg";
import BackButton from "../components/BackButton";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://swapi.py4e.com/api/planets";

  useEffect(() => {
    const loadPlanets = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        setPlanets(data.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    loadPlanets();
  }, []);

  const getID = (url) => {
    const parsed = url?.split("/");
    return parsed[parsed.length - 2];
  };

  return (
    <Container>
      <HStack direction="row" marginTop={5} marginBottom={5}>
        <BackButton />
        <Image src={planetsThumbnail} width="40px" />
        <Heading as="h1" size="xl">
          Planets
        </Heading>
      </HStack>

      {!loading ? (
        <SimpleGrid columns={2} spacing={4}>
          {planets.map((planet, index) => {
            const id = getID(planet.url);
            return (
              <div key={index}>
                <Link to={`/star-wars/planets/${id}`}>{planet.name}</Link>
              </div>
            );
          })}
        </SimpleGrid>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default Planets;
