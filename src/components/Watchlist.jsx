import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie }) => {
  // Movie card was expecting a movie prop, so we had to rename what the item was called within the .map function to be able to access the movie in moviecard
  const movieDisplay = list.map((movie, index) => {
    console.log(movie)
    return (
      <MovieCard movie={movie} removeMovie={removeMovie} list={list} />
    );
  })

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">
        {movieDisplay}
      </div>
    </div>
  );
};

export default Watchlist;
