import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import axios from "axios";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => {
    return setList([...list, movie]);
  };

  const removeMovie = (movie) => {
    const newState = list.filter((movies) => {
      return movies !== movie;
    });
    setList(newState);
  };

  const getData = () => {
    console.log('hello')
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData()
  }, [page]);

  return (
    <div className="App">
      <Header />

      <main>
        <MovieScreen
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
