import React from "react";
import styles from "./MyList.module.css";
import { useOutletContext } from "react-router-dom";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { Image } from "react-bootstrap";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";
import MovieYearLength from "../../global/components/MovieYearLength/MovieYearLength";
import CustomProgress from "../../global/components/CustomProgress/CustomProgress";
import ContinueWatching from "../ContinueWatching/ContinueWatching";
import { CgPlayListRemove } from "react-icons/cg";
import ScrollableList from "../../global/components/ScrollableList/ScrollableList";

const MyList = () => {
  const { allMovies, setMovie, setShowModal } = useOutletContext();
  return (
    <div>
      <h4 className="mt-4 text-light fw-semibold">My list</h4>
      <ScrollableList>
        {/* <div className={`${styles.listContainer} mt-2`}>
        <ul className={`${styles.list} text-light`}> */}
        {allMovies.map((movie, index) => (
          <li key={index} className={`${styles.cardContainer} scrollableListCardContainer p-3`}>
            <div className={`${styles.imgContainer}`}>
              <Image fluid src={movie.image} className="w-100 mt-1" />
              <div
                onClick={() => setMovie(movie.id)}
                className={styles.detailsIconDiv}
              >
                <MdOutlinePlaylistPlay />
              </div>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <h5 className="fw-semibold mt-3">{movie.title}</h5>
              <div className="mt-2">
                <PlayBTN
                  movieId={movie && movie.id}
                  movie={movie && movie}
                  setShowModal={setShowModal}
                  text="Play"
                  textColor="text-light"
                  bgColor="redBTNbg"
                  icon={true}
                  padding="smBTNPadding"
                />
              </div>
            </div>
            <div className="w-100">
              <MovieYearLength
                length={movie && movie.length}
                year={movie && movie.year}
              />
            </div>
            <div className="w-100 mt-3">
              <CustomProgress now={80} />
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <small className="fw-normal">12m 8 s remaining</small>
                <CgPlayListRemove className="fs-3" />
              </div>
            </div>
            <div></div>
          </li>
        ))}
        {/* </ul>
        
       
      </div> */}
      </ScrollableList>
      <ContinueWatching />
    </div>
  );
};

export default MyList;
