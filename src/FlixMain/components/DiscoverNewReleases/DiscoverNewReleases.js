import React, { useState, useEffect } from "react";
import styles from "./DiscoverNewReleases.module.css";
import { Row, Col, Image, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const DiscoverNewReleases = ({ allMovies }) => {
  const tags = ["All", "Watched", "Saved", "Recommended", "History"];

  const imagePerRow = 8;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  useEffect(() => {
    console.log(next, "next");
  }, [next]);

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
          <Col key={index} sm={12} lg={4} xl={3} className="mb-4 text-light">
            <div
              className={`${styles.cardContainer} px-3 pt-2 pb-3 d-flex flex-column h-100 justify-content-between`}
            >
              <div>
                <div className="d-flex w-100 justify-content-end">
                 
                  <BsThreeDots
                    role="button"
                    className={`${styles.icon} fs-3 me-1`}
                  />
                
                </div>

                <div className={styles.imgContainer}>
                  <Image fluid src={movie.image} className="w-100 mt-1" />
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
                    <span className="fw-semibold text-light">{movie.year}</span>{" "}
                    &bull; {movie.length}
                  </p>

                  <small
                    className={`${styles.likeSpan} rounded-pill py-1 px-3 d-flex align-items-center gap-2 text-light`}
                  >
                    <FaHeart />
                    {movie.likes}
                  </small>
                </div>
              {/* </div> */}
            </div>
          </Col>
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
