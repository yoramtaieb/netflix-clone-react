import React, { useState, useEffect } from "react";
import { fetchMoviesNowPlaying } from "../../../service/index";
import { Link } from "react-router-dom";

function NowPlayingMovies() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMoviesNowPlaying());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div>
        {nowPlaying
          ? nowPlaying.map((movie, index) => {
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

export default NowPlayingMovies;
