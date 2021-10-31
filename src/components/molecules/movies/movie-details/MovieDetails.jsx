import React, { useState, useEffect } from "react";
import { fetchDetailsMovie } from "../../../../service";

import "./Details.scss";

const MovieDetails = ({ match }) => {
  let params = match.params;
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetails(await fetchDetailsMovie(params.id));
    };

    fetchAPI();
  }, [params.id]);

  return (
    <>
      <div className="details">
        <div
          className="container_images"
          style={{
            backgroundImage: `url(${posterUrl + details.backdrop_path})`,
          }}
        ></div>
        <div className="informations">
          <div className="info">
            <h3>
              Title :<span>{details.title}</span>
            </h3>
          </div>
          <div className="info">
            <h3>
              Overview :<span>{details.overview}</span>
            </h3>
          </div>
          <div className="info">
            <h3>
              Release-Date :<span>{details.release_date}</span>
            </h3>
          </div>
          <div className="info">
            <h3>
              Rated :<span>{details.vote_average}/10</span>
            </h3>
          </div>
          <div className="info">
            <h3>
              Original-Language :<span>{details.original_language}</span>
            </h3>
          </div>
          <div className="info">
            <h3>
              Popularity :<span>{details.popularity}</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
