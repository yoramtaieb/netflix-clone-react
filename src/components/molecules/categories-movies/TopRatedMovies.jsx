import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopratedMovies } from "../../../service/index";

const TopRatedMovies = () => {
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTopRated(await fetchTopratedMovies());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="categories_movies">
        <div className="title">
          <h3>Top Rated Movies :</h3>
        </div>
        <div className="all_infos">
          {topRated.results
            ? topRated.results.map((movie, index) => {
                return (
                  <div key={index}>
                    <Link to={`/movie/${movie.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${
                            posterUrl + movie.poster_path
                          })`,
                        }}
                        className="container_img"
                      ></div>
                      <div className="container_title">
                        <h3 className="movie_title">{movie.title}</h3>
                        <h3 className="movie_rated">
                          <span>Rated : </span>
                          {movie.rating}
                          <span className="note">/10</span>
                        </h3>
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

export default TopRatedMovies;
