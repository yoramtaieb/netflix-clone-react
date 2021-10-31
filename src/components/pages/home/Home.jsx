import React from "react";
import Carousel from "../../atoms/carousel/Carousel";
import TabsGenres from "../../atoms/tabs-genres/TabsGenres";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Carousel />
        <TabsGenres />
      </div>
    </>
  );
};

export default Home;
