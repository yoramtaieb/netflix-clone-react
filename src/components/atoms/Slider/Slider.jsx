import React, { useEffect, useState } from "react";
import { fetchMoviesPopular } from "../../../service";
import Slider from "react-slick";
import settings from "./settings";

import "./Slider.scss";

function Sliders() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setPopular(await fetchMoviesPopular());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          {popular
            ? popular.map((movie, index) => {
                return (
                  <div key={index}>
                    <div className="movie">
                      <div
                        className="container_images"
                        style={{
                          backgroundImage: `url(${movie.backPoster})`,
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
}

export default Sliders;
