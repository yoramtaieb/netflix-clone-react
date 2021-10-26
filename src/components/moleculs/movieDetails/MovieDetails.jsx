import React, { useState, useEffect } from "react";
import { fetchMovieDetail } from "../../../service";

export function MovieDetails({ match }) {
  let params = match.params;
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
    };

    fetchAPI();
  }, [params.id]);

  return (
    <>
      <div>
        <img
          src={posterUrl + detail.backdrop_path}
          alt=""
          style={{ height: "150px" }}
        />
        <h3>{detail.id}</h3>
        <h3>{detail.title}</h3>
        <h3>{detail.release_date}</h3>
        <h3>{detail.overview}</h3>
      </div>
    </>
  );
}

export default MovieDetails;
