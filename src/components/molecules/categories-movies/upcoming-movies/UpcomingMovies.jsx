import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUpcomingMovie } from "../../../../service/index";

import "./CategoriesMovies.scss";

function UpcomingMovies() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUpcoming(await fetchUpcomingMovie());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="categories_movies">
        <div className="title">
          <h3>Upcoming Movies :</h3>
        </div>
        <div className="all_infos">
          {upcoming
            ? upcoming.map((movie, index) => {
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
}

export default UpcomingMovies;
