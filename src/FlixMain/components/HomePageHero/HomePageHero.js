import React, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Carousel } from "react-bootstrap";
import styles from "./HomePageHero.module.css";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";

const HomePageHero = ({
  setShowModal,
  movies,
  fetchContinueWatching,
  setContinueWatching,
  continueWatching,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const flowers = process.env.PUBLIC_URL + "/images/flowers.jpg";

  useEffect(() => {
    // Function to randomly select 3 movies
    const getRandomMovies = (movies) => {
      const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
      return shuffledMovies.slice(0, 3);
    };

    // Set selected movies on component mount
    setSelectedMovies(getRandomMovies(movies));
  }, [movies]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [selectedMovies]);

  // Ensure the component doesn't break if selectedMovies is empty
  if (selectedMovies.length === 0) {
    return null; // or some loading indicator
  }

  return (
    <div
      className={`${styles.homePageHeroContainer} position-relative mt-4 pe-3`}
    >
      <Carousel
        controls={false}
        indicators={false}
        fade
        activeIndex={activeIndex}
        onSelect={() => {}}
      >
        {selectedMovies.map((movie, index) => (
          <Carousel.Item key={index} className={`${styles.carouselItem}`}>
            <div className={styles.backgroundImage}>
              <Image src={flowers} />
            </div>
            <div className={styles.overlay}></div>
            <Row className={`${styles.overlayContent} p-4`}>
              <Col className="h-100">
                <div className="h-100">
                  <Image src={movie.image} />
                </div>
              </Col>
              <Col className="h-100 d-flex flex-column justify-content-center pe-5">
                {" "}
                <div className={`${styles.textContainer} d-flex flex-column`}>
                  <h2>
                    {movie.title} <span className="fs-5">({movie.year})</span>
                  </h2>
                  <p className="mt-3">
                    <span className="fw-semibold">Created by:</span>{" "}
                    {movie.creator}
                  </p>
                  <p className="mb-2">
                    <span className="fw-semibold">Cast:</span>{" "}
                    {movie.cast_members.join(", ")}
                  </p>
                  <p className="mt-3">{movie.description_long}</p>
                  <div className="mt-4 d-flex gap-3">
                    <PlayBTN
                      text="Watch now"
                      fetchContinueWatching={fetchContinueWatching}
                      setContinueWatching={setContinueWatching}
                      continueWatching={continueWatching}
                      movieId={movie && movie.id}
                      movie={movie && movie}
                      setShowModal={setShowModal}
                      icon={true}
                      textColor="text-light"
                      bgColor="redBTNbg"
                    />

                    <CustomBTN
                      text="Watch trailer"
                      textColor="greyBTNText"
                      variant="light"
                      icon={false}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePageHero;
