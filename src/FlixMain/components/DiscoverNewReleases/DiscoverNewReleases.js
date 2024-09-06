import React, { useState } from "react";
import styles from "./DiscoverNewReleases.module.css";
import { Row, Button } from "react-bootstrap";
import MovieCard from "../../global/components/MovieCard/MovieCard";
import PaginationBTN from "../../global/components/PaginationBTN/PaginationBTN";
import useMediaQueries from "../../utils/UseMediaQuery";

const DiscoverNewReleases = ({ movies , setMovie, setShowModal, addToUserList }) => {
  const tags = ["All", "Watched", "Saved", "Recommended", "History"];

  const {
    isTablet,
    isMobile,
    isXsMobile,
    isDesktopOrLaptop,
    isLgDesktopOrLaptop,
  } = useMediaQueries();

  const imagePerRow = 9;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  const showLess = next >= movies.length;

  return (
    <div
      className={`${styles.container} py-3 d-flex flex-column mt-3 pe-md-4 pe-lg-3 pe-3`}
    >
      <h4 className="text-light fw-semibold">Discover New Releases</h4>
      <div className={`${styles.tagsContainer} d-flex flex-wrap gap-2 mt-4`}>
        {tags.map((tag, index) => (
          <small
            key={index}
            className="bg-dark text-light rounded-pill py-1 px-4"
          >
            {tag}
          </small>
        ))}
      </div>
      <Row className="mt-5">
        {movies?.slice(0, next)?.map((movie, index) => (
          <MovieCard
            movie={movie}
            key={index}
            setMovie={setMovie}
            setShowModal={setShowModal}
            addToUserList={addToUserList}
            ////// this has to be adjusted 
            // height={isDesktopOrLaptop || isTablet ? "18rem" : "25rem" }
            height={"18rem"}
          />
        ))}
      </Row>
      <PaginationBTN
        onClick={showLess ? handleLessImage : handleMoreImage}
        text={showLess ? "See less" : "Load more"}
      />
    </div>
  );
};

export default DiscoverNewReleases;
