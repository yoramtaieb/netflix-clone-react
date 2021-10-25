import React, { useState, useEffect } from "react";
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
                  <h3>{movie.title}</h3>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default PopularMovies;
