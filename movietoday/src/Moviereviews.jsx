import { useState, useEffect } from "react";
import axios from "axios";

const Moviereviews = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "6f25283a";

  const fetchMovieData = async (title) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`
      );
      if (response.data.Response === "False") {
        setError(response.data.Error);
        setMovieData(null);
      } else {
        setMovieData(response.data);
        setError(null);
      }
    } catch (err) {
      setError("An error occurred while fetching the data.");
      setMovieData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieTitle.trim()) {
      fetchMovieData(movieTitle);
    }
  };

  return (
    <div className="movie-reviews">
      <h1>Search For Movie Reviews</h1>

      {/* Search bar */}
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter movie title"
        />
        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>

      {/* Display errors if any */}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      {/* Display movie details if available */}
      {movieData && (
        <div>
          <img src={movieData.Poster} alt={`${movieData.Title} poster`} />
          <h2>
            {movieData.Title} ({movieData.Year})
          </h2>
          <p>
            <strong className="imdb-rating">IMDB Rating:</strong>{" "}
            {movieData.imdbRating}
          </p>
          <p className="mr-p">
            <strong>Plot:</strong> {movieData.Plot}
          </p>
          <p>
            <strong>Director:</strong> {movieData.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movieData.Actors}
          </p>
        </div>
      )}
    </div>
  );
};

export default Moviereviews;
