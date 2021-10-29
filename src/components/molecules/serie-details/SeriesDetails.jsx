import React, { useState, useEffect } from "react";
import { fetchDetailsSeries } from "../../../service";

const SerieDetails = ({ match }) => {
  let params = match.params;
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetails(await fetchDetailsSeries(params.id));
    };

    fetchAPI();
  }, [params.id]);

  return (
    <>
      <div>
        <img
          src={posterUrl + details.backdrop_path}
          alt=""
          style={{ height: "150px" }}
        />
        <h3>{details.id}</h3>
        <h3>{details.title}</h3>
        <h3>{details.release_date}</h3>
        <h3>{details.overview}</h3>
      </div>
    </>
  );
};

export default SerieDetails;
