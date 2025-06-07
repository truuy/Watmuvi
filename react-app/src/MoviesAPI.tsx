const API_URL = "http://www.omdbapi.com/";
const API_KEY = "14bb32d3";

export async function searchMovies(query: string) {
  const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  return res.json();
}

export async function getMovieById(id: string) {
  const res = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
  return res.json();
}
