import React, { useState, useEffect } from "react";
import { fetchGenre, fetchMovieByGenre } from "../../../service";
import { Link } from "react-router-dom";

import "./GenreMovies.scss";

const GenreMovies = () => {
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const movieListByGenre = movieByGenre
    .slice(0, 8)
    .map((movieByGenre, index) => {
      return (
        <div key={index} className="movie">
          <Link to={`/movie/${movieByGenre.id}`}>
            <div
              style={{
                backgroundImage: `url(${movieByGenre.poster})`,
              }}
              className="container_img"
            ></div>
            <div className="container_title">
              <h3 className="movie_title">{movieByGenre.title}</h3>
              <h3 className="movie_rated">
                <span>Rated : </span>
                {movieByGenre.rating}
                <span className="note">/10</span>
              </h3>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <>
      <div className="genres">
        <h1 className="title">All the categories :</h1>
        <div className="all_infos">
          {genres
            ? genres.map((genre, index) => {
                return (
                  <div key={index} className="infos">
                    <h3
                      onClick={() => {
                        handleGenreClick(genre.id);
                      }}
                    >
                      {genre.name}
                    </h3>
                  </div>
                );
              })
            : null}
        </div>
        <div className="movie_by_genre">{movieListByGenre}</div>
      </div>
    </>
  );
};

export default GenreMovies;
