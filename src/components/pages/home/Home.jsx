import React from "react";
import Carousel from "../../atoms/Carousel/Carousel";
import GenreMovies from "../../moleculs/genreMovies/GenreMovies";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <Carousel />
        <GenreMovies />
      </div>
    </>
  );
}

export default Home;
