import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeartLikes from "../HeartLikes/HeartLikes";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import MovieYearLength from "../MovieYearLength/MovieYearLength";
import PlayBTN from "../PlayBTN/PlayBTN";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie, setMovie, setShowModal }) => {
  const navigate = useNavigate();
  return (
    <Col sm={12} md={6} lg={4} className="mb-4 text-light">
      <div
        className={`${styles.cardContainer} px-3 pt-2 pb-3 d-flex flex-column h-100 justify-content-between`}
      >
        <div>
          <div className="d-flex w-100 justify-content-end">
            <BsThreeDots role="button" className={`${styles.icon} fs-3 me-1`} />
          </div>

          <div className={`${styles.imgContainer} mt-1`}>
            <Image fluid src={movie.image} className="w-100 mt-1" />
            <div
              onClick={() => setMovie(movie.id)}
              className={styles.detailsIconDiv}
            >
              <MdOutlinePlaylistPlay />
            </div>
          </div>

          <h5 className="fw-semibold mt-4">{movie.title}</h5>

          <small className="pe-4">{movie.description}</small>
        </div>

        <div
          className={`d-flex mt-5 justify-content-between align-items-center`}
        >
          <MovieYearLength length={movie.length} year={movie.year} />

          <HeartLikes likes={movie.likes} />
        </div>
      </div>
    </Col>
  );
};

export default MovieCard;
