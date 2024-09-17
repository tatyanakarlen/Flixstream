import React, { useContext } from "react";
import styles from "./ContinueWatching.module.css";
import { Row, Col, Image, ProgressBar } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import CustomProgress from "../../global/components/CustomProgress/CustomProgress";
import { IoClose } from "react-icons/io5";
import { supabase } from "../../../supabaseClient";
import { UserContext } from "../../../userContext";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";

/// props play btn needs:
// text,
//   icon,
//   textColor,
//   padding,
//   variant,
//   setShowModal,
//   movieId,
//   movie,
//   continueWatching,
//   setContinueWatching,
//   fetchContinueWatching

const ContinueWatching = ({
  movie,
  continueWatching,
  setContinueWatching,
  fetchContinueWatching,
}) => {
  console.log(movie.movie_id, "movieID from continue watching");

  const { user, loading, logout } = useContext(UserContext);

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
        // Fetch updated data after deletion or update state directly
        await fetchContinueWatching(); // Refetch data to update state
      }
    } catch (error) {
      console.error("Unexpected error removing movie:", error);
    }
  };

  return (
    <div className={`${styles.continueWatching} d-flex p-3 text-light gap-3`}>
      <Image src={movie && movie.image} width={90} height={80} />
      <div className="d-flex flex-column w-100">
        <h5 className="mb-1">{movie && movie.title}</h5>
        <div className="mt-3">
          <CustomProgress now={80} />
        </div>
        <small className="mt-2">{movie && movie.time_remaining}</small>
      </div>
      <div className="d-flex flex-column align-items-end ms-2">
        <small
          onClick={() => removeFromContinueWatching(movie.movie_id)}
          className="text-decoration-underline"
        >
          Remove
        </small>

        {/* <div className={`${styles.playBTN} p-2 text-dark`}>
          <FaPlay className="fs-5" />
        </div> */}
        <div className={styles.playBtnContainer}>
        <PlayBTN
          variant="light"
          // bgColor="greyBTNbg"
          textColor="text-dark"
          icon={true}
          movieId={movie.movie_id}
          movie={movie}
          continueWatching={continueWatching}
          setContinueWatching={setContinueWatching}
          fetchContinueWatching={fetchContinueWatching}
        />
        </div>
      </div>

      {/* <div className="d-flex gap-3 w-100">
        <Image src={movie && movie.image} width={70} height={70} />
        <div className="d-flex flex-column w-100 text-light">
          <div className="d-flex justify-content-between w-100">
            <h5>{movie && movie.title}</h5>
            <IoClose />
          </div>
          <CustomProgress now={80} />
          <small className="mt-2">{movie && movie.time_remaining}</small>
        </div>
      </div>
      <div className={`${styles.playBTN} p-2 me-3`}>
        <FaPlay className="fs-5" />
      </div> */}
    </div>
  );
};

export default ContinueWatching;
