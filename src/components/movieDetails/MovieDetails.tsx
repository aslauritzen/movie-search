import './MovieDetails.scss';
import React, { useEffect, useState } from 'react';
import OmdbService from '../../services/omdbService/omdb.service';
import filmReel from '../../images/film-reel.png';

interface MovieDetailsProps {
	movie: Api.Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
	const ombdService = new OmdbService();
	const [movieDetails, setMovieDetails] = useState<Api.MovieDetailed>();
	useEffect(() => {
		async function getMovieDetails() {
			const movieResponse = await ombdService.getMovieDetails(props.movie.imdbID);
			setMovieDetails(movieResponse);
		}
		getMovieDetails().catch(console.error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!movieDetails) return null;

	function handleError(e: React.InvalidEvent<HTMLImageElement>) {
		if (e.target.src !== filmReel) {
			e.target.src = filmReel;
		}
	}

	function renderMovieData() {
		if (!movieDetails) return null;

		return (
			<div className={'movieData'}>
				<h3>{movieDetails.Title}</h3>
				<h4>Directed By: {movieDetails.Director}</h4>
				<h4>Genre: {movieDetails.Genre}</h4>
				<h4>Released: {movieDetails.Released}</h4>
			</div>
		);
	}

	return (
		<div className={'movieDetails'}>
			<img
				height={'50%'}
				width={'auto'}
				className={'moviePoster'}
				src={movieDetails.Poster}
				alt={`${movieDetails.Title} Poster`}
				onError={handleError}
			/>
			{renderMovieData()}
		</div>
	);
};

export default MovieDetails;
