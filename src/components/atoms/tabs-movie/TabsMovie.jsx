import React, { useState } from "react";
import styled from "styled-components";
import PopularMovies from "../../moleculs/categoriesMovies/popularMovies/PopularMovies";
import TopRatedMovies from "../../moleculs/categoriesMovies/topRatedMovies/TopRatedMovies";

import "./TabsMovie.scss";

const Tab = styled.button`
  cursor: pointer;
  background: white;
  font-family: "Poppins-extrabold";
  font-size: 0.8rem;
  border: 1px solid black;
  border-radius: 20px;
  margin-right: 10px;
  padding: 5px 20px;
  ${({ active }) =>
    active &&
    `
    background: #a4191a;
  `}
`;

function TabsMovie() {
  const categorieTitles = ["Popular Movies", "Top Rated Movies"];
  const [active, setActive] = useState(categorieTitles);
  const categories = [<PopularMovies />, <TopRatedMovies />];

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
      <div>{active === "Popular Movies" ? categories[0] : categories[1]}</div>
    </>
  );
}

export default TabsMovie;
