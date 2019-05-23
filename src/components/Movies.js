import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const getMovies = movies.map(movie => { return(
    <div>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <h4>{movie.genres.toLocaleString(' ')}</h4>
    </div>
  )})

  return (
    <div>
      <h1>Movies Page</h1>
      {getMovies}
    </div>
  );
};

export default Movies;
