import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMoviesPopular } from "../../../service/index";

const PopularMovies = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setPopular(await fetchMoviesPopular());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="categories_movies">
        <div className="title">
          <h3>Popular Movies :</h3>
        </div>
        <div className="all_infos">
          {popular
            ? popular.map((movie, index) => {
                return (
                  <div key={index}>
                    <Link to={`/movie/${movie.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${movie.poster})`,
                        }}
                        className="container_img"
                      ></div>
                      <div className="container_title">
                        <h3 className="movie_title">{movie.title}</h3>
                      </div>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;
