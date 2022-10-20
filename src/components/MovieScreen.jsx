import React from "react";
import MovieCard from "./MovieCard";
import '../App.css'

const MovieScreen = ({
  addMovie,
  movieList,
  page,
  setPage,
  list,
  removeMovie,
}) => {
  // const {movieList, page, setPage, list } = props;
  const decrement = () => setPage(page - 1);
  const increment = () => setPage(page + 1);

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} list={list}/>
    );
  });

  return (
    <div className="page">
      <h1>Gabriel's Movie Theatre</h1>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement} className='btn'>Previous</button>
        <button onClick={increment} className='btn'>Next</button>
      </div>
      <h3>Add a movie to your watchlist!</h3>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
