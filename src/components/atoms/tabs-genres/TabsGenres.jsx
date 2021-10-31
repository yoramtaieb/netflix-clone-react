import React, { useState } from "react";
import styled from "styled-components";
import GenreMovies from "../../molecules/movies/genre-movies/GenreMovies";
import GenreSeries from "../../molecules/series/genre-series/GenreSeries";

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

const TabsGenres = () => {
  const categorieTitles = ["Genres Serie", "Genres Movie"];
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
      <div>{active === "Genres Movie" ? <GenreMovies /> : <GenreSeries />}</div>
    </>
  );
};

export default TabsGenres;
