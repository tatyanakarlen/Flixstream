import React, { useContext } from "react";
import styles from "./ContinueWatching.module.css";
import { Image } from "react-bootstrap";
import CustomProgress from "../../global/components/CustomProgress/CustomProgress";
import { supabase } from "../../../supabaseClient";
import { UserContext } from "../../../userContext";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";

const ContinueWatching = ({
  movie,
  continueWatching,
  setContinueWatching,
  fetchContinueWatching,
}) => {
  const { user } = useContext(UserContext);

  const removeFromContinueWatching = async (movieId) => {
    try {
      if (!user) {
        console.error("User must be logged in to remove movies.");
        return;
      }

      const { error } = await supabase
        .from("continue_watching")
        .delete()
        .eq("user_id", user.id)
        .eq("movie_id", movieId);

      if (error) {
        console.error("Error deleting movie:", error.message);
      } else {
        console.log("Movie removed from continue watching");

        await fetchContinueWatching();
      }
    } catch (error) {
      console.error("Unexpected error removing movie:", error);
    }
  };

  return (
    <div
      role="region"
      aria-labelledby={`movie-title-${movie.movie_id}`}
      className={`${styles.continueWatching} d-flex p-3 text-light gap-3`}
    >
      <Image
        alt={`Poster for ${movie?.title}`}
        src={movie && movie.image}
        width={90}
        height={80}
      />
      <div className="d-flex flex-column w-100">
        <h5 id={`movie-title-${movie.movie_id}`} className="mb-1">
          {movie && movie.title}
        </h5>
        <div className="mt-3">
          <CustomProgress aria-label={`Progress: 80%`} now={80} />
        </div>
        <small className="mt-2">{movie && movie.time_remaining}</small>
      </div>
      <div className="d-flex flex-column align-items-end ms-2">
        <small
          aria-label={`Remove ${movie?.title} from continue watching`}
          onClick={() => removeFromContinueWatching(movie.movie_id)}
          className="text-decoration-underline"
        >
          Remove
        </small>

        <div className={styles.playBtnContainer}>
          <PlayBTN
            variant="light"
            textColor="text-dark"
            icon={true}
            movieId={movie.movie_id}
            movie={movie}
            continueWatching={continueWatching}
            setContinueWatching={setContinueWatching}
            fetchContinueWatching={fetchContinueWatching}
            aria-label={`Play ${movie?.title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
