import React, { useState, useEffect } from "react";
import { fetchGenre } from "../../../service";

import "./GenreMovies.scss";

const GenreMovies = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenre(await fetchGenre());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="genres">
        <h1 className="title">All the categories :</h1>
        <div className="all_infos">
          {genre
            ? genre.map((genre, index) => {
                return (
                  <div key={index} className="infos">
                    <h3>{genre.name}</h3>
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
