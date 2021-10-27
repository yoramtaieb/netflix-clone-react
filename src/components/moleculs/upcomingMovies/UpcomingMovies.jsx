import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUpcomingMovie } from "../../../service/index";

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
      <div>
        {upcoming
          ? upcoming.map((movie, index) => {
              return (
                <div key={index}>
                  <Link to={`/movie/${movie.id}`}>
                    <h3>{movie.title}</h3>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default UpcomingMovies;
