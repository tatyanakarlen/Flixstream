import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Carousel,
  Image,
  Col,
} from "react-bootstrap";
import { TbMovie } from "react-icons/tb";
import BasicMovieCard from "../../global/components/BasicMovieCard/BasicMovieCard";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import DetailsModal from "../../global/components/DetailsModal/DetailsModal";
import styles from "./Welcome.module.css";
import AuthModal from "./AuthModal/AuthModal";
import useMediaQueries from "../../utils/UseMediaQuery";
import { chunkArray } from "../../utils/chuckArray";
import { supabase } from "../../../supabaseClient";

const Welcome = () => {
  const { isTablet, isMobile, isXsMobile } = useMediaQueries();

  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [movies, setMovies] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  console.log(movies, 'movies')

  const fetchAllMovies = async () => {
    try {
      const { data, error } = await supabase.from("movies").select("*");
      if (error) {
        console.error("Error fetching movies:", error);
      } else {
        setMovies(data);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  const handleCloseAuthModal = () => {
    setIsLoginMode(!isLoginMode);
    setShowAuthModal(false);
  };

  const setMovie = (id) => {
    setSelectedMovie(id);
    setShowDetailsModal(true);
  };

  const firstThreeMovies = movies ? movies.slice(0, 3) : [];
const firstFourMovies = movies ? movies.slice(0, 4) : [];
const chunkedMovies = movies ? chunkArray(movies, 2) : [];

  return (
    <div className={`${styles.welcomePage} text-light d-flex flex-column`}>
      <DetailsModal
        showModal={showDetailsModal}
        setShowModal={setShowDetailsModal}
        selectedMovie={selectedMovie}
        movies={movies}
      />

      <AuthModal
        handleCloseAuthModal={handleCloseAuthModal}
        show={showAuthModal}
        isLoginMode={isLoginMode}
        setIsLoginMode={setIsLoginMode}
      />

      <Navbar className="justify-content-between" expand="lg">
        <Navbar.Brand
          className="d-flex align-items-center gap-2 fw-semibold"
          href="/"
        >
          <TbMovie />
          FlixStream
        </Navbar.Brand>
        {!isMobile && (
          <div>
            <Nav className="me-auto d-flex flex-row gap-3">
              <CustomBTN
                text="Register"
                textColor={"text-dark fw-semibold"}
                variant="light"
                icon={false}
                padding="px-4"
                onClick={() => setShowAuthModal(true)}
                // bgColor={isTablet && "redBTNbg"}
              />
              <Nav.Link
                onClick={() => {
                  setIsLoginMode(true);
                  setShowAuthModal(true);
                }}
                className={`${styles.link} text-nowrap fw-semibold text-light`}
              >
                Sign in
              </Nav.Link>
            </Nav>
          </div>
        )}
      </Navbar>

      <div className="d-flex justify-content-center align-items-center flex-column flex-grow-1">
        {isTablet ? (
          <div className="d-flex flex-column h-100 justify-content-center">
            <div className="d-flex flex-column gap-2 align-items-center">
              <span className={`${styles.accentSpan} mb-3`}></span>
              <h1 className="fw-semibold">Welcome to FlixStream</h1>
              <h5 className="fw-light mt-1">
                Stream the latest blockbusters and timeless classics
              </h5>
              <div className="mt-3">
                <CustomBTN
                  text="Sign Up for Free"
                  textColor="text-light"
                  bgColor="redBTNbg"
                  onClick={() => setShowAuthModal(true)}
                />
              </div>
            </div>
            <div className="w-100 mt-5">
              <Carousel
                className={styles.carousel}
                controls={false}
                interval={null}
              >
                {chunkArray(movies, 2).map((moviePair, index) => (
                  <Carousel.Item className="" key={index}>
                    <Row className={styles.carouselRow}>
                      {moviePair.map((movie, subIndex) => (
                        <BasicMovieCard
                          // height="16rem"
                          key={index}
                          movie={movie}
                          setMovie={setMovie}
                        />
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        ) : isMobile ? (
          <>
            <span className={`${styles.accentSpan} mt-1`}></span>
            <div className="d-flex justify-content-center align-items-center">
              <h2
                className={`${styles.h2} mt-4 text-center w-75 w-sm-100 fw-semibold`}
              >
                Stream the latest films and timeless classics
              </h2>
            </div>
            <div className="w-100 mt-4">
              <Carousel
                className={styles.carousel}
                controls={false}
                interval={null}
              >
                {firstThreeMovies.map((movie, index) => (
                  <Carousel.Item className="" key={index}>
                    <Row className={styles.carouselRow}>
                      <BasicMovieCard
                        // height={isXsMobile ? "15rem" : "20rem"}
                        key={index}
                        movie={movie}
                        setMovie={setMovie}
                      />
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="mt-2 w-100">
              <CustomBTN
                onClick={() => setShowAuthModal(true)}
                text={"Sign Up/Login"}
                textColor="text-light fw-semibold"
                bgColor="redBTNbg"
                padding="lgBTNPadding"
                width="w-100"
              />
            </div>
          </>
        ) : (
          <>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-semibold">Welcome to FlixStream</h1>
              <h5 className="fw-light mt-1">
                Stream the latest blockbusters and timeless classics
              </h5>
              <div className="mt-3">
                <CustomBTN
                  text="Sign Up for Free"
                  textColor="text-light"
                  bgColor="redBTNbg"
                  onClick={() => setShowAuthModal(true)}
                />
              </div>
              <h4 className="mt-5">Featured Movies</h4>
            </div>
            <Row className="mt-5 w-100 px-lg-1 px-xl-5">
              {firstFourMovies.map((movie, index) => (
                <BasicMovieCard
                 
                  key={index}
                  movie={movie}
                  setMovie={setMovie}
                />
              ))}
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default Welcome;
