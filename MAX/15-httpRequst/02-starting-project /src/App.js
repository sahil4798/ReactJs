import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moives, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoiviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
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
    } catch (error) {
      setError(error.message);
      console.log(error);
    }

    setIsLoading(false);
  }
  let content = <p>No Movies</p>;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (moives.length > 0) {
    content = <MoviesList movies={moives} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoiviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && moives.length > 0 && <MoviesList movies={moives} />}
        {!isLoading && moives.length === 0 && !error && <p>No Movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
