import React, { useState, useEffect } from "react";
import { fetchGenresSerie, fetchSeriesByGenre } from "../../../../service";
import { Link } from "react-router-dom";

const GenreSeries = () => {
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [genres, setGenres] = useState([]);
  const [seriesByGenre, setSeriesByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenresSerie());
      setSeriesByGenre(await fetchSeriesByGenre(10759));
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setSeriesByGenre(await fetchSeriesByGenre(genre_id));
  };

  return (
    <>
      <div className="genres">
        <div className="title">
          <h3>Genres Serie :</h3>
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
          {seriesByGenre.results
            ? seriesByGenre.results.slice(0, 8).map((serieByGenre, index) => {
                return (
                  <div key={index} className="movie">
                    <Link to={`/serie/${serieByGenre.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${
                            posterUrl + serieByGenre.poster_path
                          })`,
                        }}
                        className="container_img"
                      ></div>
                      <div className="container_title">
                        <h3 className="movie_title">{serieByGenre.name}</h3>
                        <h3 className="movie_rated">
                          <span>Rated : </span>
                          {serieByGenre.vote_average}
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

export default GenreSeries;
