import React, { useState, useEffect } from "react";
import { fetchGenresMovie, fetchMoviesByGenre } from "../../../../service";
import { Link } from "react-router-dom";

import "./GenreMovies.scss";

const GenreMovies = () => {
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenresMovie());
      setMoviesByGenre(await fetchMoviesByGenre(28));
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMoviesByGenre(await fetchMoviesByGenre(genre_id));
  };

  return (
    <>
      <div className="genres">
        <div className="title">
          <h3>Genres Movie :</h3>
        </div>
        <div className="all_infos">
          {genres.genres
            ? genres.genres.slice(0, 10).map((genre, index) => {
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
          {moviesByGenre.results
            ? moviesByGenre.results.slice(0, 8).map((movieByGenre, index) => {
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
