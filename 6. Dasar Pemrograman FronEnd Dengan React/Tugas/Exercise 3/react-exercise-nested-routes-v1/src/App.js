import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./layouts/Main";
import People from "./routes/People";
import PeopleDetail from "./routes/PeopleDetail";
import Planets from "./routes/Planets";
import PlanetsDetail from "./routes/PlanetDetail";
import Movies from "./routes/Movies";
import MovieDetail from "./routes/MovieDetail";
import NotFound from "./routes/NotFound";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="star-wars" element={<Main />}>
      <Route path="people" element={<People />} />
      <Route path="people/:id" element={<PeopleDetail />} />
      <Route path="planets" element={<Planets />} />
      <Route path="planets/:id" element={<PlanetsDetail />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:id" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
