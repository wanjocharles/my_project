import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchTerm) => {
    // Call API to search movies
    // Update state with fetched movies
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

