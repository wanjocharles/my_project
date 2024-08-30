export const searchMovies = async (searchTerm) => {
  const response = await fetch(`https://api.example.com/search?query=${searchTerm}`);
  const data = await response.json();
  return data.movies;
};

