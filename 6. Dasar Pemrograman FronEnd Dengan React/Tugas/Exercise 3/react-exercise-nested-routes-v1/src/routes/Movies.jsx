import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moviesThumbnail from "../assets/movies.jpeg";
import BackButton from "../components/BackButton";
import { Text, HStack, Box, Container, Heading } from "@chakra-ui/react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://swapi.py4e.com/api/films";

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    loadMovies();
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
          Movies
        </Heading>
      </HStack>

      {!loading ? (
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap={4}>
          {movies.map((movie, index) => {
            const id = getID(movie.url);
            return (
              <div key={index}>
                <Link to={`/star-wars/movies/${id}`}>{movie.title}</Link>
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

export default Movies;
