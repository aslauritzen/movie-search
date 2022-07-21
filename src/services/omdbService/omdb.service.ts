import axios from 'axios';
import config from '../../config';

export default class OmdbService {
	private readonly basePath = `https://www.omdbapi.com/?apikey=${config.apiKey}`;

	async searchMovie(search: string): Promise<Api.Movie[]> {
		if (!search) return [];
		const response = await axios.get<Api.SearchResponse>(`${this.basePath}&s=${search}`);

		if (response.data.Error) throw new Error(response.data.Error);

		return response.data.Search || [];
	}

	async getMovieDetails(imdbId: string): Promise<Api.MovieDetailed> {
		const response = await axios.get<Api.MovieDetailed>(`${this.basePath}&i=${imdbId}`);
		return response.data;
	}
}
