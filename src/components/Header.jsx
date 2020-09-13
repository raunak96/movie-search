import React, { useState, useEffect } from "react";
import FetchMovies from "../apis/api";
import logo from "../assets/logo.svg";
import SearchBox from './SearchBox';
import axios from 'axios';
import useDebounce from "../useDebounce";

const Header = ({handleData}) => {
	const [movieName, setMovieName] = useState("");

	// this custom-hook returns searchQuery which is movieName to search from API after 1s which makes sure API not called for every letter typed
	const searchQuery = useDebounce(movieName, 1000);

	useEffect(() => {
		const setMovieData = async () => {
			const cancelToken = axios.CancelToken.source();
			const movies = await FetchMovies(searchQuery, cancelToken);
			handleData(movies);
		};
		if (searchQuery !== "") setMovieData();
		else handleData([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchQuery]);

	const handleChange = (e) => {
		setMovieName(e.target.value);
	};
	return (
		<nav className='navbar'>
			<div className='title'>
				<img alt='app icon' src={logo} style={{ height: "35px" }} />
				<h1 className='brand-name'>MoviesDB Search</h1>
			</div>
			<SearchBox handleChange={handleChange} movieName={movieName} />
		</nav>
	);
};

export default Header;