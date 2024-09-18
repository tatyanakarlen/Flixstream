import React, { useState, useEffect } from "react";
import { Image, Row, Col, Carousel } from "react-bootstrap";
import styles from "./HomePageHero.module.css";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";

const HomePageHero = ({
  setShowModal,
  fetchContinueWatching,
  setContinueWatching,
  continueWatching,
  selectedMovies,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const flowers = process.env.PUBLIC_URL + "/images/flowers.jpg";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [selectedMovies]);

  return (
    <section
      aria-label="Home page hero section featuring movie highlights"
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
              <Image alt="Decorative background with flowers" src={flowers} />
            </div>
            <div className={styles.overlay} aria-hidden="true"></div>
            <Row
              role="group"
              aria-labelledby={`movie-title-${index}`}
              className={`${styles.overlayContent} p-4`}
            >
              <Col className="h-100">
                <div className="h-100">
                  <Image
                    alt={`Poster of the movie ${movie.title}`}
                    src={movie.image}
                  />
                </div>
              </Col>
              <Col className="h-100 d-flex flex-column justify-content-center pe-5">
                {" "}
                <div className={`${styles.textContainer} d-flex flex-column`}>
                  <h2 id={`movie-title-${index}`}>
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
                      aria-label={`Watch now: ${movie.title}`}
                    />

                    <CustomBTN
                      text="Watch trailer"
                      textColor="greyBTNText"
                      variant="light"
                      icon={false}
                      aria-label={`Watch trailer for: ${movie.title}`}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HomePageHero;
