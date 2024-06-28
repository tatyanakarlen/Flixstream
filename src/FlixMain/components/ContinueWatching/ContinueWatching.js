import React from "react";
import styles from "./ContinueWatching.module.css";
import { Row, Col, Image, ProgressBar } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import CustomProgress from "../../global/components/CustomProgress/CustomProgress";

const ContinueWatching = ({ movie }) => {
  return (
    <div
      className={`${styles.continueWatching} d-flex justify-content-between p-3 align-items-center gap-5`}
    >
      <div className="d-flex gap-3 w-100">
        <Image src={movie && movie.image} width={70} height={70} />
        <div className="d-flex flex-column w-100 text-light">
          <h5>{movie && movie.title}</h5>
          <CustomProgress now={80} />
          <small className="mt-2">{movie && movie.timeRemaining}</small>
        </div>
      </div>
      <div className={`${styles.playBTN} p-2 me-3`}>
        <FaPlay className="fs-5" />
      </div>
    </div>
  );
};

export default ContinueWatching;
