import React from "react";

import TabsGenres from "../../atoms/tabs-genres/TabsGenres";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <TabsGenres />
      </div>
    </>
  );
};

export default Home;
