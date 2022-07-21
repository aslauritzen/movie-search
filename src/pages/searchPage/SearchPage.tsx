import './SearchPage.scss';
import React, { useEffect, useState } from 'react';
import OmdbService from '../../services/omdbService/omdb.service';
import MoviePosters from '../../components/moviePosters/MoviePosters';
import SearchBar from '../../components/searchBar/SearchBar';
import ErrorNotification from '../../components/errorNotification/ErrorNotification';

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
	const ombdService = new OmdbService();
	const [movies, setMovies] = useState<Api.Movie[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>();
	const searchBarState = useState<string>('');
	const [search] = searchBarState;

	useEffect(() => {
		async function getMovies() {
			try {
				const movieResponse = await ombdService.searchMovie(search);
				setMovies(movieResponse);
				setErrorMessage(undefined);
			} catch (e: any) {
				const error: Error = e;
				setErrorMessage(error.message);
			}
		}
		getMovies().catch(console.error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	function renderMoviePosters() {
		if (!!errorMessage) return <ErrorNotification errorMessage={errorMessage} />;

		return <MoviePosters movies={movies} />;
	}

	return (
		<div className={'searchPage'}>
			<SearchBar searchBarState={searchBarState} />
			{renderMoviePosters()}
		</div>
	);
};

export default SearchPage;
