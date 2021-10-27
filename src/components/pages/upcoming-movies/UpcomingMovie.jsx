import React from "react";
import UpcomingMovies from "../../moleculs/categoriesMovies/upcomingMovies/UpcomingMovies";

import "./UpcomingMovie.scss";

function UpcomingMovie() {
  return (
    <>
      <div className="upcoming_movies">
        <UpcomingMovies />
      </div>
    </>
  );
}

export default UpcomingMovie;
