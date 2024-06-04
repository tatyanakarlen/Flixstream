import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineQueuePlayNext } from "react-icons/md";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <Col sm={12} lg={4} xl={3} className="mb-4 text-light">
      <div
        className={`${styles.cardContainer} px-3 pt-2 pb-3 d-flex flex-column h-100 justify-content-between`}
      >
        <div>
          <div className="d-flex w-100 justify-content-end">
            <BsThreeDots role="button" className={`${styles.icon} fs-3 me-1`} />
          </div>

          <div className={`${styles.imgContainer} mt-1`}>
            <Image fluid src={movie.image} className="w-100 mt-1" />
            <div className={styles.detailsIconDiv}>
              <MdOutlinePlaylistPlay />
            </div>
          </div>
          <div>
            <h5 className="fw-semibold mt-4">{movie.title}</h5>
            <small className="pe-4">{movie.description}</small>
          </div>
        </div>

        <div
          className={`d-flex mt-5 justify-content-between align-items-center`}
        >
          <p className={`${styles.movieYearLength} mb-0`}>
            <span className="fw-semibold text-light">{movie.year}</span> &bull;{" "}
            {movie.length}
          </p>

          <small
            className={`${styles.likeSpan} rounded-pill py-1 px-3 d-flex align-items-center gap-2 text-light`}
          >
            <FaHeart />
            {movie.likes}
          </small>
        </div>
      </div>
    </Col>
  );
};

export default MovieCard;
