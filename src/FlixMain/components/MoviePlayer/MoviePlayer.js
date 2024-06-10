import Reac, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const MoviePlayer = () => {
  const { movieId } = useParams();
  const { playMovie, moviePlayed } =
    useOutletContext();

  console.log(moviePlayed, 'moviePlayed')

  useEffect(() => {
     playMovie(movieId)
  }, [])

   

  return (
    <div>
      <h1> i am movie player movie id # {movieId}</h1>
    </div>
  );
};

export default MoviePlayer;
