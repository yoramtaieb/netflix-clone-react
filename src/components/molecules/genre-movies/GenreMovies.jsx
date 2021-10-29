import React, { useState, useEffect } from "react";
import { fetchGenres, fetchMovieByGenre } from "../../../service";
import { Link } from "react-router-dom";

import "./GenreMovies.scss";

const GenreMovies = () => {
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenres());
      setMovieByGenre(await fetchMovieByGenre(28));
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  return (
    <>
      <div className="genres">
        <h1 className="title">All the categories :</h1>
        <div className="all_infos">
          {genres.genres
            ? genres.genres.map((genre, index) => {
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
        <div className="movie_by_genre">
          {movieByGenre.results
            ? movieByGenre.results.slice(0, 8).map((movieByGenre, index) => {
                return (
                  <div key={index} className="movie">
                    <Link to={`/movie/${movieByGenre.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${
                            posterUrl + movieByGenre.poster_path
                          })`,
                        }}
                        className="container_img"
                      ></div>
                      <div className="container_title">
                        <h3 className="movie_title">{movieByGenre.title}</h3>
                        <h3 className="movie_rated">
                          <span>Rated : </span>
                          {movieByGenre.vote_average}
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

export default GenreMovies;
