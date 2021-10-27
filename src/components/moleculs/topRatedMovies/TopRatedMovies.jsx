import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopratedMovie } from "../../../service/index";

function TopRatedMovies() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div>
        {topRated
          ? topRated.map((movie, index) => {
              return (
                <div key={index}>
                  <Link to={`/movie/${movie.id}`}>
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

export default TopRatedMovies;
