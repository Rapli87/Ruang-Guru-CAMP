import React from "react";
import { Link } from "react-router-dom";
import people from "../assets/people.jpeg";
import planets from "../assets/planets.jpeg";
import movies from "../assets/movies.jpeg";
import {
  Card,
  Image,
  SimpleGrid,
  Text,
  CardBody,
  Container,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        <Link to="/star-wars/people">
          <Card>
            <Image src={people} alt="People" />
            <CardBody>
              <Text>People</Text>
            </CardBody>
          </Card>
        </Link>
        <Link to="/star-wars/planets">
          <Card>
            <Image src={planets} alt="Planets" />
            <CardBody>
              <Text>Planets</Text>
            </CardBody>
          </Card>
        </Link>
        <Link to="/star-wars/movies">
          <Card>
            <Image src={movies} alt="Movies" />
            <CardBody>
              <Text>Movies</Text>
            </CardBody>
          </Card>
        </Link>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
