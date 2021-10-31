import React from "react";
import UpcomingMovies from "../../molecules/movies/categories-movies/UpcomingMovies";

import "./UpcomingMovie.scss";

const UpcomingMovie = () => {
  return (
    <>
      <div className="upcoming_movies">
        <UpcomingMovies />
      </div>
    </>
  );
};

export default UpcomingMovie;
