import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MovieScreen from './components/MovieScreen';
import axios from 'axios';

function App() {

  const [movieList, setMovieList] = useState([])
  const [list, setWatchList] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
        .then((results) => {
          setMovieList(results.data.results)
        })
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <div className="App">
      <Header />

      <main>
        <MovieScreen
          movieList = {movieList}
          page = {page}
          setPage = {setPage}
          list = {list} />
      </main>
    </div>
  );
}

export default App;
