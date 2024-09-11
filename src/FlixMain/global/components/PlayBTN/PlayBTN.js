import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IoPlaySharp } from "react-icons/io5";
import styles from "./PlayBTN.module.css";
import { supabase } from "../../../../supabaseClient";
import { UserContext } from "../../../../userContext";

const PlayBTN = ({
  text,
  icon,
  textColor,
  padding,
  variant,
  setShowModal,
  movieId,
  movie,
  continueWatching,
  setContinueWatching,
  fetchContinueWatching
}) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const addToContinueWatching = async (movieId, movie) => {
    if (!user) {
      console.error("User is not authenticated.");
      return;
    }

    console.log(movieId, 'movie id from play btn')

    // Check if the movie is already in the list
    const exists = continueWatching.some((item) => item.movie_id === movieId);

    if (exists) {
      console.warn("Movie already in continue watching list.");
      return;
    }

    try {
      // Use user.id from context
      const { data, error } = await supabase.from("continue_watching").insert([
        {
          user_id: user.id, // Use user ID from context
          movie_id: movieId,
          title: movie.title,
          image: movie.image,
          time_remaining: "23min 1s", // Dummy data for time remaining
        },
      ]);

      if (error) throw error;

      // Update the local state to include the new movie
      if (data && data.length > 0) {
        setContinueWatching((prev) => [...prev, data[0]]);
        console.log("Movie added to continue watching list:", data);
      }

      
      if (fetchContinueWatching) {
        await fetchContinueWatching();
      }
    } catch (error) {
      console.error("Error adding movie to continue watching list:", error);
    }
  };

  return (
    <Button
      onClick={() => {
        navigate(`/dashboard/play/${movie && movieId}`);
        setShowModal && setShowModal(false);
        addToContinueWatching(movieId, movie);
      }}
      variant={variant}
      className={`${padding} ${styles.btn} ${textColor} d-flex align-items-center justify-content-center gap-2 rounded`}
    >
      {icon && <IoPlaySharp />}

      {text}
    </Button>
  );
};

export default PlayBTN;
