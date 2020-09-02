import React from "react";

const Movie = ({ movie: { poster_src, title, overview,id } }) => {
	return (
		<div className='movie-item'>
			<div className="img-container">
				<img alt='poster' src={poster_src} />
			</div>
			<div className='movie-details'>
				<h3>{title}</h3>
				<p>{overview}</p>
				<a href={`https://www.themoviedb.org/movie/${id}`} target="_blank" rel="noopener noreferrer">View</a>
			</div>
		</div>
	);
};

export default Movie;
