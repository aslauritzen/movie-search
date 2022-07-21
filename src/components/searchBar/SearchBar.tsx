import './SearchBar.scss';
import React from 'react';

interface SearchBarProps {
	searchBarState: [string, React.Dispatch<React.SetStateAction<string>>];
}

let timeoutId: number;

const SearchBar: React.FC<SearchBarProps> = (props) => {
	const { searchBarState } = props;
	const setSearch = searchBarState[1];

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			setSearch(e.target.value);
		}, 500);
	}

	return (
		<div className={'searchBar'}>
			<input type={'text'} className={'search'} onChange={handleChange} placeholder={'Search...'} />
		</div>
	);
};

export default SearchBar;
