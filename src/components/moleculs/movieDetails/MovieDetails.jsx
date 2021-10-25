import React, { useState, useEffect } from "react";
import { fetchMovieDetail } from "../../../service";

export function MovieDetails({ match }) {
  let params = match.params;
  const posterUrl = "https://image.tmdb.org/t/p/original/";
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
    };

    fetchAPI();
  }, [detail, params.id]);

  return (
    <>
      <div>
        <img
          src={posterUrl + detail.poster_path}
          alt=""
          style={{ height: "400px" }}
        />
        <h3>{detail.id}</h3>
        <h3>{detail.title}</h3>
        <h3>{detail.release_date}</h3>
      </div>
    </>
  );
}

export default MovieDetails;
