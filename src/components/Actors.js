import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const getActors = actors.map(actor => {
    return(
      <div>
        <h2>{actor.name}</h2>
        <p>{actor.movies.toLocaleString()}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {getActors}
    </div>
  );
};

export default Actors;
