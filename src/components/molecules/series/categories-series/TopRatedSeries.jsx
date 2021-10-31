import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopRatedSeries } from "../../../../service/index";

const TopRatedSeries = () => {
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTopRated(await fetchTopRatedSeries());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="categories_movies">
        <div className="title">
          <h3>Top Rated Series :</h3>
        </div>
        <div className="all_infos">
          {topRated.results
            ? topRated.results.map((serie, index) => {
                return (
                  <div key={index}>
                    <Link to={`/serie/${serie.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${
                            posterUrl + serie.poster_path
                          })`,
                        }}
                        className="container_img"
                      ></div>
                      <div className="container_title">
                        <h3 className="movie_title">{serie.name}</h3>
                        <h3 className="movie_rated">
                          <span>Rated : </span>
                          {serie.vote_average}
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

export default TopRatedSeries;
