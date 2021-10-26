import React from "react";
import Sliders from "../../atoms/Slider/Slider";
import GenreMovies from "../../moleculs/genreMovies/GenreMovies";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <Sliders />
        <GenreMovies />
      </div>
    </>
  );
}

export default Home;
