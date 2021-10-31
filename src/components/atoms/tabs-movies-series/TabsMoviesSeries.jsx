import React, { useState } from "react";
import styled from "styled-components";
import PopularMovies from "../../molecules/movies/categories-movies/PopularMovies";
import TopRatedMovies from "../../molecules/movies/categories-movies/TopRatedMovies";
import PopularSeries from "../../molecules/series/categories-series/PopularSeries";
import TopRatedSeries from "../../molecules/series/categories-series/TopRatedSeries";

import "./TabsMoviesSeries.scss";

const Tab = styled.button`
  cursor: pointer;
  background: #efefef;
  font-family: "Poppins-extrabold";
  font-size: 0.8rem;
  border: 1px solid black;
  border-radius: 20px;
  margin: 0 10px 10px 0;
  padding: 5px 0;
  width: 150px;
  ${({ active }) =>
    active &&
    `
    background: #a4191a;
  `}
`;

const TabMoviesSeries = () => {
  const categorieTitles = [
    "Popular Movies",
    "Top Rated Movies",
    "Popular Series",
    "Top Rated Series",
  ];
  const [active, setActive] = useState(categorieTitles);

  return (
    <>
      <div className="tabs">
        {categorieTitles.map((category) => (
          <Tab
            key={category}
            active={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </Tab>
        ))}
      </div>
      <div>
        {active === "Popular Movies" ? (
          <PopularMovies />
        ) : active === "Top Rated Movies" ? (
          <TopRatedMovies />
        ) : active === "Popular Series" ? (
          <PopularSeries />
        ) : active === "Top Rated Series" ? (
          <TopRatedSeries />
        ) : (
          <PopularMovies />
        )}
      </div>
    </>
  );
};

export default TabMoviesSeries;
