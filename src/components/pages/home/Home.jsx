import React, { useState, useEffect } from "react";
import { fetchGenre } from "../../../service";

function Home() {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenre(await fetchGenre());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div>
        {genre
          ? genre.map((genre, index) => {
              return (
                <div key={index}>
                  <h3>{genre.name}</h3>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default Home;
