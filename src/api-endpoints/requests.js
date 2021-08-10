export const API_KEY = process.env.REACT_APP_API_KEY;

export const BASE_URL = "https://api.themoviedb.org/3"

export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const requests = {
    netflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    romanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    popularTvShows: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
};