import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMoviesPopular } from "../../../service/index";

function PopularMovies() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setPopular(await fetchMoviesPopular());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div>
        {popular
          ? popular.map((movie, index) => {
              return (
                <div key={index}>
                  <Link to={`/popular-movies/movie/${movie.id}`}>
                    <h3>{movie.title}</h3>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default PopularMovies;
