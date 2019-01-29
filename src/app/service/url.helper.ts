const API_URL = 'https://api.themoviedb.org/3/';
const MULTI_SEARCH = 'search/multi';
const TV = 'tv';
const AND_QUERY_EQUALS = '&query=';
const MOVIE = 'movie';
const SIMILAR = 'similar';
const CREDITS = 'credits';
const VIDEOS = 'videos';
const REVIEWS = 'reviews';

const TOP_RATED_MOVIES = 'movie/top_rated?';
const TOP_RATED_TV = 'tv/top_rated?';
const POPULAR_MOVIES = 'movie/popular?';
const POPULAR_TV = 'tv/popular?';

const API_KEY = 'api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US';

export function getSearchUrl(query) {
  return API_URL + MULTI_SEARCH + '?' + API_KEY + AND_QUERY_EQUALS + query;
}

export function getMovieByIdUrl(movieId) {
  return API_URL + MOVIE + '/' + movieId + '?' + API_KEY;
}

export function getTopRatedMoviesUrl() {
  return API_URL + TOP_RATED_MOVIES + API_KEY;
}

export function getPopularMoviesUrl() {
  return API_URL + POPULAR_MOVIES + API_KEY;
}

export function getSimilarMovies(movieId) {
  return API_URL + MOVIE + '/' + movieId + '/' + SIMILAR + '?' + API_KEY;
}

export function getCreditsForMovieUrl(movieId) {
  return API_URL + MOVIE + '/' + movieId + '/' + CREDITS + '?' + API_KEY;
}

export function getVideosForMovieUrl(movieId) {
  return API_URL + MOVIE + '/' + movieId + '/' + VIDEOS + '?' + API_KEY;
}

export function getReviewsForMovieUrl(movieId) {
  return API_URL + MOVIE + '/' + movieId + '/' + REVIEWS + '?' + API_KEY;
}

export function getTvShowByIdUrl(id) {
  return API_URL + TV + '/' + id + '?' + API_KEY;
}

export function getCreditsForTvShowUrl(tvId) {
  return API_URL + TV + '/' + tvId + '/' + CREDITS + '?' + API_KEY;
}

export function getVideosForTvShowUrl(tvId) {
  return API_URL + TV + '/' + tvId + '/' + VIDEOS + '?' + API_KEY;
}

export function getReviewsForTvShowUrl(tvId) {
  return API_URL + TV + '/' + tvId + '/' + REVIEWS + '?' + API_KEY;
}

export function getTopRatedTvUrl() {
  return API_URL + TOP_RATED_TV + API_KEY;
}

export function getPopularTvUrl() {
  return API_URL + POPULAR_TV + API_KEY;
}

