const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchPopularMovies() {
  const url = `${apiUrl}movie/popular${apiKey}`;
  let result = await fetch(url);
  let popular = await result.json();
  return popular;
}

export async function fetchTopratedMovies() {
  const url = `${apiUrl}movie/top_rated${apiKey}`;
  let result = await fetch(url);
  let topRated = await result.json();
  return topRated;
}

export async function fetchUpcomingMovies() {
  const url = `${apiUrl}movie/upcoming${apiKey}`;
  let result = await fetch(url);
  let upcoming = await result.json();
  return upcoming;
}

export async function fetchDetailsMovie(id) {
  const url = `${apiUrl}movie/${id}${apiKey}`;
  let result = await fetch(url);
  let movieByGenre = await result.json();
  return movieByGenre;
}

export async function fetchGenres() {
  const url = `${apiUrl}genre/movie/list${apiKey}`;
  let result = await fetch(url);
  let genres = await result.json();
  return genres;
}

export async function fetchMovieByGenre(genre_id) {
  const url = `${apiUrl}discover/movie${apiKey}&with_genres=${genre_id}`;
  let result = await fetch(url);
  let movieByGenre = await result.json();
  return movieByGenre;
}
