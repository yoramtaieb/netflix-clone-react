const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// Methods for movies
export async function fetchPopularMovies() {
  const url = `${apiUrl}movie/popular${apiKey}`;
  let result = await fetch(url);
  let popular = await result.json();
  return popular;
}

export async function fetchTopRatedMovies() {
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
  let detailsMovie = await result.json();
  return detailsMovie;
}

export async function fetchGenresMovie() {
  const url = `${apiUrl}genre/movie/list${apiKey}`;
  let result = await fetch(url);
  let genres = await result.json();
  return genres;
}

export async function fetchMoviesByGenre(genre_id) {
  const url = `${apiUrl}discover/movie${apiKey}&with_genres=${genre_id}`;
  let result = await fetch(url);
  let movieByGenre = await result.json();
  return movieByGenre;
}

// Methods for series
export async function fetchPopularSeries() {
  const url = `${apiUrl}tv/popular${apiKey}`;
  let result = await fetch(url);
  let popular = await result.json();
  return popular;
}

export async function fetchTopRatedSeries() {
  const url = `${apiUrl}tv/top_rated${apiKey}`;
  let result = await fetch(url);
  let topRated = await result.json();
  return topRated;
}

export async function fetchDetailsSeries(id) {
  const url = `${apiUrl}tv/${id}${apiKey}`;
  let result = await fetch(url);
  let detailsSerie = await result.json();
  return detailsSerie;
}

export async function fetchGenresSerie() {
  const url = `${apiUrl}genre/tv/list${apiKey}`;
  let result = await fetch(url);
  let genres = await result.json();
  return genres;
}

export async function fetchSeriesByGenre(genre_id) {
  const url = `${apiUrl}discover/tv${apiKey}&with_genres=${genre_id}`;
  let result = await fetch(url);
  let serieByGenre = await result.json();
  return serieByGenre;
}
