import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../../service";
import Slider from "react-slick";
import settings from "./settings";

import "./Carousel.scss";

const Carousel = () => {
  const posterUrl = process.env.REACT_APP_POSTER_URL;
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setPopular(await fetchPopularMovies());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="slider">
        {popular.title}
        <Slider {...settings}>
          {popular.results
            ? popular.results.map((movie, index) => {
                return (
                  <div key={index}>
                    <div className="movie">
                      <div
                        className="container_images"
                        style={{
                          backgroundImage: `url(${
                            posterUrl + movie.backdrop_path
                          })`,
                        }}
                      >
                        <h3>{movie.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
