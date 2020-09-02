import React, { useState, useEffect } from "react";
import FetchMovies from "../apis/api";
import logo from "../assets/logo.svg";
import SearchBox from './SearchBox';
import axios from 'axios';

const Header = ({handleData}) => {
	const [movieName, setMovieName] = useState("");
	useEffect(()=>{
		const setMovieData = async () => {
			const cancelToken = axios.CancelToken.source();
			const movies = await FetchMovies(movieName, cancelToken);
			handleData(movies);
		};
		setMovieData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[movieName]);

	const handleChange = (e) => {
		setMovieName(e.target.value);
	};
    return (
		<nav className='navbar'>
            <div className="title">
                <img alt='app icon' src={logo} style={{ height: "35px" }} />
			    <h1 className='brand-name'>MoviesDB Search</h1>
            </div>
			<SearchBox handleChange={handleChange} movieName={movieName} />
		</nav>
	);
};

export default Header;