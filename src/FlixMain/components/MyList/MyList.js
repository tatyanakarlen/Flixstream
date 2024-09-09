import React, { useState } from "react";
import styles from "./MyList.module.css";
import { useOutletContext } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";
import MovieYearLength from "../../global/components/MovieYearLength/MovieYearLength";
import CustomProgress from "../../global/components/CustomProgress/CustomProgress";
import ContinueWatching from "../ContinueWatching/ContinueWatching";
import { CgPlayListRemove } from "react-icons/cg";
import ScrollableList from "../../global/components/ScrollableList/ScrollableList";
import ImgOnclickShowsDetail from "../../global/components/ImgOnclickShowsDetail/ImgOnclickShowsDetail";
import { FaEye } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import PaginationBTN from "../../global/components/PaginationBTN/PaginationBTN";
import BasicMovieCard from "../../global/components/BasicMovieCard/BasicMovieCard";

const MyList = () => {
  const { movies, setMovie, setShowModal, continueWatching, userMovies } =
    useOutletContext();

  const imagePerRow = 12;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  const showLess = next >= movies.length;

  return (
    <div>
      <h4 className="mt-4 text-light fw-semibold">My list</h4>
      <ScrollableList>
        {userMovies.map((movie, index) => (
          <li
            key={index}
            className={`${styles.cardContainer} scrollableListCardContainer p-3 text-light`}
          >
            <ImgOnclickShowsDetail
              src={movie.image}
              onClick={() => setMovie(movie.id)}
              height="11rem"
            />
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
                <small className="fw-normal mb-1">12m 8 s remaining</small>
                <CgPlayListRemove className="fs-3" />
              </div>
            </div>
            <div></div>
          </li>
        ))}
      </ScrollableList>
      <h4 className="mt-4 text-light fw-semibold">Continue watching</h4>
      <ScrollableList>
        {continueWatching.map((movie, index) => (
          <li key={index} className={`scrollableListCardContainer`}>
            <ContinueWatching movie={movie} />
          </li>
        ))}
      </ScrollableList>
      <h4 className="mt-3 text-light fw-semibold">Recommended</h4>
      <Row className="mt-4 pe-3">
        {movies?.slice(0, next)?.map((movie, index) => (
          <BasicMovieCard height="13rem" key={index} movie={movie} setMovie={setMovie} />
        ))}
      </Row>
      <div className="d-flex w-100 justify-content-center">
        <PaginationBTN
          onClick={showLess ? handleLessImage : handleMoreImage}
          text={showLess ? "See less" : "Load more"}
        />
      </div>
    </div>
  );
};

export default MyList;
