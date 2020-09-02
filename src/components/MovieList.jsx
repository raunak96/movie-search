import React from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {
    return (
        <div className="container">
            {
                movies.map(movie=>{
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    return (<Movie key={movie.id} movie={movie}/>)
                })
            }
        </div>
    );
};

export default MovieList;