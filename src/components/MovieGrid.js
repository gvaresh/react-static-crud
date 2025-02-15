import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genere, setGenere] = useState("All Genere");
  const [rating, setRating] = useState("All");

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleGenereChange = e => {
    setGenere(e.target.value);
  };
  const handleRatingChange = e => {
    setRating(e.target.value);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  useEffect(() => {
    fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data));
    // setMovies(m);
  }, []);
  return (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search Input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <div className="filter-bar">
          <div className="filter-slot">
            <label for="genere">Choose a genere:</label>
            <select
              name="genere"
              id="genere"
              className="filter-dropdown"
              value={genere}
              onChange={handleGenereChange}
            >
              <option>Horror</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Thriller</option>
            </select>
          </div>
          <div className="filter-slot">
            <label for="rating">Choose a rating:</label>
            <select
              name="rating"
              id="rating"
              className="filter-dropdown"
              value={rating}
              onChange={handleRatingChange}
            >
              <option>All</option>
              <option>Good</option>
              <option> Ok</option>
              <option>Bad</option>
            </select>
          </div>
        </div>
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
