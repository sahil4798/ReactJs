import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moives, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchMoiviesHandler = () => {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       const transformedMoivies = data.results.map((moive) => {
  //         return {
  //           id: moive.episode_id,
  //           title: moive.title,
  //           openingText: moive.opening_crawl,
  //           releaseDate: moive.release_date,
  //         };
  //       });
  //       setMovies(transformedMoivies);
  //     });
  // };
  async function fetchMoiviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const transformedMoivies = data.results.map((moive) => {
      return {
        id: moive.episode_id,
        title: moive.title,
        openingText: moive.opening_crawl,
        releaseDate: moive.release_date,
      };
    });
    setMovies(transformedMoivies);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoiviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && moives.length > 0 && <MoviesList movies={moives} />}
        {!isLoading && moives.length === 0 && <p>No Movies</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
