import React, { useState } from "react";
import styles from "./MyList.module.css";
import { useOutletContext } from "react-router-dom";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { Image, Col, Row } from "react-bootstrap";
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

const MyList = () => {
  const { allMovies, setMovie, setShowModal, continueWatching } =
    useOutletContext();

  const imagePerRow = 12;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  const showLess = next >= allMovies.length;

  return (
    <div>
      <h4 className="mt-4 text-light fw-semibold">My list</h4>
      <ScrollableList>
        {allMovies.map((movie, index) => (
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
      <Row className="mt-4">
        {allMovies?.slice(0, next)?.map((movie, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-5 text-light">
            <div className={`d-flex flex-column h-100`}>
              {" "}
              <ImgOnclickShowsDetail
                src={movie.image}
                onClick={() => setMovie(movie.id)}
                height="13rem"
              />
              <h5 className="mt-4 fw-semibold">{movie.title}</h5>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                  <FaEye />
                  <small>10.5k watching</small>
                </div>
                <MdPlaylistAdd className="fs-4" />
              </div>
            </div>
          </Col>
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
