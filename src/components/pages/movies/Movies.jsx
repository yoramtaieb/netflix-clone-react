import React from "react";
import PopularMovies from "../../moleculs/categoriesMovies/popularMovies/PopularMovies";
import TopRatedMovies from "../../moleculs/categoriesMovies/topRatedMovies/TopRatedMovies";

import "./Movies.scss";

function Movies() {
  return (
    <>
      <div className="movies">
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </>
  );
}

export default Movies;
