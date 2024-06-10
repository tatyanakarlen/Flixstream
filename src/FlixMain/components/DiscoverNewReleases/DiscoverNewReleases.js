import React, { useState } from "react";
import styles from "./DiscoverNewReleases.module.css";
import { Row, Button } from "react-bootstrap";
import MovieCard from "../../global/components/MovieCard/MovieCard";

const DiscoverNewReleases = ({ allMovies, setMovie }) => {
  const tags = ["All", "Watched", "Saved", "Recommended", "History"];

  const imagePerRow = 8;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  return (
    <div className={`${styles.container} p-5 d-flex flex-column`}>
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
          <MovieCard movie={movie} key={index} setMovie={setMovie} />
        ))}
      </Row>

      <Button
        onClick={next === allMovies.length ? handleLessImage : handleMoreImage}
        variant="light"
        className={`${styles.btn} rounded-pill fw-semibold align-self-center mt-4`}
      >
        {next === allMovies.length ? "See less" : "Load more"}
      </Button>
    </div>
  );
};

export default DiscoverNewReleases;
