import {
  getCreditsForMovieUrl, getCreditsForTvShowUrl,
  getMovieByIdUrl,
  getPopularMoviesUrl, getPopularTvUrl, getReviewsForMovieUrl, getReviewsForTvShowUrl,
  getSimilarMovies,
  getTopRatedMoviesUrl, getTopRatedTvUrl,
  getVideosForMovieUrl, getVideosForTvShowUrl
} from './url.helper';

describe('Url Helper', () => {

  it('Should return find By ID url', () => {
    expect(getMovieByIdUrl(9334))
      .toBe('https://api.themoviedb.org/3/movie/9334?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return top rated movies url', () => {
    expect(getTopRatedMoviesUrl())
      .toBe('https://api.themoviedb.org/3/movie/top_rated?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return popular movies url', () => {
    expect(getPopularMoviesUrl())
      .toBe('https://api.themoviedb.org/3/movie/popular?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return similar movies url', () => {
    expect(getSimilarMovies(9334))
      .toBe('https://api.themoviedb.org/3/movie/9334/similar?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return credits for movie url', () => {
    expect(getCreditsForMovieUrl(9334))
      .toBe('https://api.themoviedb.org/3/movie/9334/credits?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return videos for movie url', () => {
    expect(getVideosForMovieUrl(9334))
      .toBe('https://api.themoviedb.org/3/movie/9334/videos?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return reviews movies url', () => {
    expect(getReviewsForMovieUrl(9334))
      .toBe('https://api.themoviedb.org/3/movie/9334/reviews?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return top rated tv url', () => {
    expect(getTopRatedTvUrl())
      .toBe('https://api.themoviedb.org/3/tv/top_rated?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return popular tv url', () => {
    expect(getPopularTvUrl())
      .toBe('https://api.themoviedb.org/3/tv/popular?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return credits for tv url', () => {
    expect(getCreditsForTvShowUrl(9334))
      .toBe('https://api.themoviedb.org/3/tv/9334/credits?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return videos for tv url', () => {
    expect(getVideosForTvShowUrl(9334))
      .toBe('https://api.themoviedb.org/3/tv/9334/videos?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });

  it('Should return reviews tv url', () => {
    expect(getReviewsForTvShowUrl(9334))
      .toBe('https://api.themoviedb.org/3/tv/9334/reviews?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US');
  });


});
