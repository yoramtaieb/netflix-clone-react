import React from "react";
import TabsMovie from "../../atoms/tabs-movie/TabsMovie";

import "./Movies.scss";

function Movies() {
  return (
    <>
      <div className="movies">
        <TabsMovie />
      </div>
    </>
  );
}

export default Movies;
