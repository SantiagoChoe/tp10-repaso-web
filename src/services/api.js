import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_URL = "https://www.omdbapi.com/";

export const buscarPeliculas = async (titulo) => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: API_KEY,
      s: titulo,
      type: "movie",
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data.Search;
};

export const obtenerPelicula = async (id) => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full",
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data;
};