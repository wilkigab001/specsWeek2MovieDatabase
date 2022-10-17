import React from 'react';

const MovieScreen = (props) => {
    const {movieList, page, setPage, list } = props;
    
    const movieDisplay = movieList.map((val, index) => {
        return(
            <h2></h2>
        )
    })

    return(
        <div className='page'>
            <h1>Gabriel's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className='movie-container'>
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen