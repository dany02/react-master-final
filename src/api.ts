const API_KEY = "ef557b10d044b423a64a87f669727c83";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

interface IMovie {
    backdrop_path: string;
    id: number;
    overview: string;
    poster_path: string;
    title: string;
}

export interface IGetMovieResult {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export function getPopular() {
    return fetch(`${BASE_URL}popular?api_key=${API_KEY}`).then((response) =>
        response.json()
    );
}
export function getComing() {
    return fetch(`${BASE_URL}upcoming?api_key=${API_KEY}`).then((response) =>
        response.json()
    );
}
export function getNowPlaying() {
    return fetch(`${BASE_URL}now_playing?api_key=${API_KEY}`).then((response) =>
        response.json()
    );
}

export interface IGetDetailMovie {
    backdrop_path: string;
    budget: number;
    id: number;
    overview: string;
    revenue: number;
    runtime: number;
    title: string;
    vote_average: number;
	homepage: string;
}

export function getDetailMovie(id: number|undefined) {
		return fetch(`${BASE_URL}${id}?api_key=${API_KEY}`).then((response) =>
			response.json()
		);

}
