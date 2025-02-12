import React, { useState, useEffect } from "react";
import "../styles.css";
export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data));
    // setMovies(m);
  }, []);
  return (
    <>
      <div> Movie Grid {movies.length}</div>
    </>
  );
}
