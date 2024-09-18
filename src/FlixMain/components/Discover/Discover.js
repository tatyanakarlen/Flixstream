import React, { useState, useEffect } from "react";
import { Button, Image, Row, Col } from "react-bootstrap";
import styles from "./Discover.module.css";
import { FaChevronRight } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import ImageOverlay from "../../global/components/ImageOverlay/ImageOverlay";

const Discover = () => {
  const { movies } = useOutletContext();

  const action = process.env.PUBLIC_URL + "/images/movie_categories/action.jpg";
  const sciFi = process.env.PUBLIC_URL + "/images/movie_categories/sci-fi.jpeg";
  const comedy = process.env.PUBLIC_URL + "/images/movie_categories/comedy.jpg";
  const drama = process.env.PUBLIC_URL + "/images/movie_categories/drama.jpg";
  const doc = process.env.PUBLIC_URL + "/images/movie_categories/doc.jpeg";
  const crime = process.env.PUBLIC_URL + "/images/movie_categories/crime.jpg";
  const animation =
    process.env.PUBLIC_URL + "/images/movie_categories/animation.jpeg";
  const romance =
    process.env.PUBLIC_URL + "/images/movie_categories/romance.jpg";
  const foreign =
    process.env.PUBLIC_URL + "/images/movie_categories/foreign.jpg";

  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    const getRandomMovies = (movies) => {
      const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
      return shuffledMovies.slice(0, 6);
    };

    setSelectedMovies(getRandomMovies(movies));
  }, [movies]);

  const recommended = [
    {
      image: action,
      title: "Action & Adventure",
    },
    {
      image: sciFi,
      title: "Sci-Fi & Fantasy",
    },
    {
      image: comedy,
      title: "Comedy Shows",
    },
    {
      image: drama,
      title: "Drama Series",
    },
    {
      image: doc,
      title: "Documentaries",
    },
    {
      image: crime,
      title: "Crime & Mystery",
    },
    {
      image: animation,
      title: "Animated Series",
    },
    {
      image: romance,
      title: "Romantic Movies",
    },
    {
      image: foreign,
      title: "Foreign Movies",
    },
  ];

  return (
    <div className="pe-3">
      <div className="d-flex w-100 justify-content-between mt-4">
        <h4 aria-label="Clear history" className="text-light">
          Explore titles
        </h4>
        <Button className={`${styles.clearHistoryBTN} rounded`}>
          Clear history
        </Button>
      </div>
      <div className="d-flex flex-column mt-4 gap-4">
        {selectedMovies.map((movie, index) => (
          <div
            aria-label={`View details for ${movie.title}`}
            role="button"
            key={index}
            className={`${styles.movieTitle} d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex gap-3 align-items-center">
              <Image
                roundedCircle
                fluid
                width={50}
                height={50}
                src={movie.image}
                className={styles.historyIMG}
                alt={`${movie.title} thumbnail`}
              />
              <div className="d-flex flex-column">
                <span className="text-light fs-6 fw-semibold">
                  {movie.title}
                </span>
                <small>{movie.year}</small>
              </div>
            </div>

            <FaChevronRight
              aria-hidden="true"
              className="text-light me-2 fs-5"
            />
          </div>
        ))}
      </div>
      <div className="text-light mt-5">
        <h5>Recommended for you</h5>
        <Row className="mt-4">
          {recommended.map((movie, index) => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={index}>
              <div className="h-100">
                <ImageOverlay item={movie} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Discover;
