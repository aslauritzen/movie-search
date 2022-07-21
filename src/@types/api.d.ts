declare namespace Api {
	export interface SearchResponse {
		Response?: string;
		Search?: Movie[];
		totalResults?: string;
		Error?: string;
	}

	export interface Movie {
		Poster: string;
		Title: string;
		Type: string;
		Year: string;
		imdbID: string;
	}

	export interface MovieDetailed extends Movie {
		Rated: string;
		Released: string;
		Runtime: string;
		Genre: string;
		Director: string;
		Writer: string;
		Actors: string;
		Plot: string;
		Language: string;
		Country: string;
		Awards: string;
		Ratings: Rating[];
		Metascore: string;
		imdbRating: string;
		imdbVotes: string;
		totalSeasons: string;
		Response: string;
	}

	export interface Rating {
		Source: string;
		Value: string;
	}
}
