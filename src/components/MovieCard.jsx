import React from "react";

const MovieCard = ({ movie, addMovie, list, removeMovie }) => {
//    const { movie, addMovie, list, removeMovie } = props;

  const inWatchList = list.filter((listMovie) =>{
    return listMovie.id === movie.id});

  const button =
    inWatchList.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove from List</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
