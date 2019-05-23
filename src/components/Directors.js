import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const getDirectors = directors.map(director => {
    return(
      <div>
        <h2>{director.name}</h2>
        <p>{director.movies.toLocaleString()}</p>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {getDirectors}
    </div>
  );
}

export default Directors
