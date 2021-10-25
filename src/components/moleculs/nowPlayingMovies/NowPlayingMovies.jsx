import React, { useState, useEffect } from "react";
import { fetchMoviesNowPlaying } from "../../../service/index";

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
                  <h3>{movie.title}</h3>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default NowPlayingMovies;
