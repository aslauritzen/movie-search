import './MoviePosters.scss';
import React from 'react';
import filmReel from '../../images/film-reel.png';
import Popup from 'reactjs-popup';
import MovieDetails from '../movieDetails/MovieDetails';

interface MoviePostersProps {
	movies: Api.Movie[];
}

const MoviePosters: React.FC<MoviePostersProps> = (props) => {
	function renderMovieData(movie: Api.Movie) {
		return (
			<div className={'movieData'}>
				<h3>{movie.Title}</h3>
				<h4>Release Year: {movie.Year}</h4>
			</div>
		);
	}

	function handleError(e: React.InvalidEvent<HTMLImageElement>) {
		if (e.target.src !== filmReel) {
			e.target.src = filmReel;
		}
	}

	function renderPosterWrapper(movie: Api.Movie) {
		return (
			<div className={'moviePosterWrapper'} key={movie.imdbID}>
				<img
					height={'50%'}
					width={'auto'}
					className={'moviePoster'}
					src={movie.Poster}
					alt={`${movie.Title} Poster`}
					onError={handleError}
				/>
				{renderMovieData(movie)}
			</div>
		);
	}

	function renderPosterWrappers() {
		return props.movies.map((movie) => (
			<Popup trigger={renderPosterWrapper(movie)} modal>
				<MovieDetails movie={movie} />
			</Popup>
		));
	}

	return <div className={'moviePosters'}>{renderPosterWrappers()}</div>;
};

export default MoviePosters;
