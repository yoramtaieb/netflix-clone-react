import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const url = "https://api.themoviedb.org/3";
const posterUrl = "https://image.tmdb.org/t/p/original/";
const nowPlayingUrl = `${url}/movie/now_playing`;
const popularUrl = `${url}/movie/popular`;
const genreUrl = `${url}/genre/movie/list`;
const movieUrl = `${url}/movie`;

export const fetchMoviesNowPlaying = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularity"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
      release_date: m["release_date"],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchMoviesPopular = async () => {
  try {
    const { data } = await axios.get(popularUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularity"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
      release_date: m["release_date"],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const modifiedData = data["genres"].map((g) => ({
      id: g["id"],
      name: g["name"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
      },
    });
    return data;
  } catch (error) {}
};
