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
import ImgOnclickShowsDetail from "../ImgOnclickShowsDetail/ImgOnclickShowsDetail";
import { LuListPlus } from "react-icons/lu";
import { MdPlaylistAdd } from "react-icons/md";

const MovieCard = ({ movie, setMovie, setShowModal, height }) => {
  const navigate = useNavigate();
  return (
    <Col sm={12} lg={6} xl={4} className="mb-4 text-light">
      <div
        className={`${styles.cardContainer} px-3 pt-2 pb-3 d-flex flex-column h-100 justify-content-between`}
      >
        <div>
          <div className="d-flex w-100 justify-content-end">
            <BsThreeDots role="button" className={`${styles.icon} fs-3 me-1`} />
          </div>
          <ImgOnclickShowsDetail
            src={movie.image}
            onClick={() => setMovie(movie.id)}
            height={height}
          />
          <div className="mt-3 d-flex justify-content-between w-100 align-items-center">
            <h5 className="fw-semibold">{movie.title}</h5>
            <MdPlaylistAdd className="fs-3 mb-2"/>
          </div>

          <small className="pe-4">{movie.description_short}</small>
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
