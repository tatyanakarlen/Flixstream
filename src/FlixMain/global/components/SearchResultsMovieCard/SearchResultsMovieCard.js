import React from "react";
import styles from "./SearchResultsMovieCard.module.css";
import { Row, Col, Image, Button } from "react-bootstrap";
import CustomBTN from "../RedBTN/CustomBTN";
import { IoPlaySharp } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const SearchResultsMovieCard = ({
  setShowModal,
  movie,
  setMovie,
}) => {

    console.log(movie.id, 'movie id from search results card')

  const actions = [
    {
      text: "My List",
      icon: <MdAdd />,
    },
    {
      text: "Like",
      icon: <LuThumbsUp />,
    },
    {
      text: "Share",
      icon: <IoShareSocialSharp />,
    },
  ];

  return (
    <Col className="mb-4 text-light" xs={12} xxl={6}>
      <div className={`${styles.cardContainer} d-flex gap-4 p-3`}>
        <div className={styles.imgContainer}>
          <Image fluid className="w-100" src={movie.image} />
          <div
            onClick={() => setMovie(movie.id)}
            className={styles.detailsIconDiv}
          >
            <MdOutlinePlaylistPlay />
          </div>
        </div>
        <div className="d-flex flex-column w-100">
          <div className="d-flex align-items-center justify-content-between">
            <h5>{movie.title}</h5>

            <CustomBTN
              text="Play"
              textColor="text-light"
              bgColor="purpleBTNbg"
              icon={<IoPlaySharp />}
            />
          </div>
          <p className={`${styles.movieYearLength} mb-0`}>
            <span className="fw-semibold text-light">{movie.year}</span> &bull;{" "}
            {movie.length}
          </p>
          <small className="pe-4 mt-3">{movie.description}</small>
          <div className="d-flex gap-4 align-items-center">
            {actions.map((action, index) => (
              <div
                className={`${styles.actionsContainer} d-flex flex-column align-items-center mt-4 gap-1`}
              >
                <div className={`${styles.iconContainer} fs-5`}>
                  {action.icon}
                </div>
                <small>{action.text}</small>
              </div>
            ))}
          </div>
          <div className="d-flex mt-4 gap-2">
            {movie.tags.map((tag, index) => (
              <small
                key={index}
                className={`${styles.tag} rounded-pill py-1 px-4 fw-semibold`}
              >
                #{tag}
              </small>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SearchResultsMovieCard;
