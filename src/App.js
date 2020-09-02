import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import "./App.css";
import MovieList from './components/MovieList';
const App = () => {
  const [movies,setMovies]= useState([]); 
  const handleData =data=> setMovies(data);
  return (
		<Fragment>
				<Header handleData={handleData} />
        {movies.length>0 && <MovieList movies={movies}/>}
		</Fragment>
  );
};

export default App;