import React, { useState } from "react";
import styles from "./DiscoverNewReleases.module.css";
import { Row, Button } from "react-bootstrap";
import MovieCard from "../../global/components/MovieCard/MovieCard";
import PaginationBTN from "../../global/components/PaginationBTN/PaginationBTN";

const DiscoverNewReleases = ({ allMovies, setMovie, setShowModal }) => {
  const tags = ["All", "Watched", "Saved", "Recommended", "History"];

  const imagePerRow = 8;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  const showLess = next >= allMovies.length;

  return (
    <div className={`${styles.container} py-3 d-flex flex-column mt-3`}>
      <h4 className="text-light fw-semibold">Discover New Releases</h4>
      <div className={`${styles.tagsContainer} d-flex gap-2 mt-4`}>
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
        {allMovies?.slice(0, next)?.map((movie, index) => (
          <MovieCard
            movie={movie}
            key={index}
            setMovie={setMovie}
            setShowModal={setShowModal}
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
