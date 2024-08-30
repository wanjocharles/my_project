import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </div>
  );
};

export default MovieCard;
