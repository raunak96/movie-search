import React from 'react';

const SearchBox = ({handleChange,movieName}) => {
	
	return (
		<input
			className='search-input'
			type='text'
			placeholder='Movie Name...'
			onChange={handleChange}
			value={movieName}
		/>
	);
};

export default SearchBox;
