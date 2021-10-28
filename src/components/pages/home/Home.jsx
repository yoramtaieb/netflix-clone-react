import React from "react";

import Carousel from "../../atoms/carousel/Carousel";
import GenreMovies from "../../molecules/genre-movies/GenreMovies";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Carousel />
        <GenreMovies />
      </div>
    </>
  );
};

export default Home;
