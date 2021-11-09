import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUpcomingMovies } from "../../../../service/index";

const UpcomingMovies = () => {
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [upcoming, setUpcoming] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setUpcoming(await fetchUpcomingMovies());
    };

    fetchAPI();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="categories_movies">
        <div className="title">
          <h3>Upcoming Movies :</h3>
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="all_infos">
          {upcoming.results
            ? upcoming.results
                .filter((movie) => {
                  return movie.title.includes(searchTerm);
                })
                .map((movie, index) => {
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
                            {movie.vote_average}
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

export default UpcomingMovies;
