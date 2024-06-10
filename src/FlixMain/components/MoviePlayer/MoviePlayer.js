import React from "react";
import { useParams } from "react-router-dom";

const MoviePlayer = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1> i am movie player movie id # {movieId}</h1>
    </div>
  );
};

export default MoviePlayer;
