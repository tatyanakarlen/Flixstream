import React, { useState } from "react";
import styles from "./DiscoverNewReleases.module.css";
import { Row } from "react-bootstrap";
import MovieCard from "../../global/components/MovieCard/MovieCard";
import PaginationBTN from "../../global/components/PaginationBTN/PaginationBTN";

import { isMovieOnUserList } from "../../utils/isMovieOnUserList";

const DiscoverNewReleases = ({
  movies,
  setMovie,
  setShowModal,
  addToUserList,
  removeFromUserList,
  userMovies,
}) => {
  const tags = ["All", "Watched", "Saved", "Recommended", "History"];

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
      role="region"
      aria-labelledby="discover-new-releases-title"
      className={`${styles.container} py-3 d-flex flex-column mt-3 pe-md-4 pe-lg-3 pe-3`}
    >
      <h4 id="discover-new-releases-title" className="text-light fw-semibold">
        Discover New Releases
      </h4>
      <div
        role="list"
        aria-labelledby="tags-title"
        className={`${styles.tagsContainer} d-flex flex-wrap gap-2 mt-4`}
      >
        <h5 id="tags-title" className="visually-hidden">
          Tags
        </h5>
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
        {movies?.slice(0, next)?.map((movie, index) => {
          const onList = isMovieOnUserList(userMovies, movie.id);

          return (
            <MovieCard
              movie={movie}
              key={index}
              setMovie={setMovie}
              setShowModal={setShowModal}
              addToUserList={addToUserList}
              removeFromUserList={removeFromUserList}
              onList={onList}
              role="listitem"
            />
          );
        })}
      </Row>
      <PaginationBTN
        aria-label={showLess ? "Show fewer movies" : "Load more movies"}
        onClick={showLess ? handleLessImage : handleMoreImage}
        text={showLess ? "See less" : "Load more"}
      />
    </div>
  );
};

export default DiscoverNewReleases;
