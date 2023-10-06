const BASE_URL = "https://movies-api.nomadcoders.workers.dev";
const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export function getPopular() {
    return fetch(`${BASE_URL}/popular`).then((r) => r.json());
}

export function getNowPlaying() {
    return fetch(`${BASE_URL}/now-playing`).then((r) => r.json());
}

export function getComingSoon() {
    return fetch(`${BASE_URL}/coming-soon`).then((r) => r.json());
}

export function getMovie(id: string) {
    return fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}

export function makeImagePath(image: string) {
    return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
    return `https://image.tmdb.org/t/p/original${image}`;
}

interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieDetail extends IMovie {
    belongs_to_collection: BelongsToCollection;
    budget: number;
    homepage: string;
    genres: Genre[];
    imdb_id: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
}

interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

interface Genre {
    id: number;
    name: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface IAPIResponse {
    page: number;
    results: IMovie[];
}
