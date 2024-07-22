import React, { useState } from "react";
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

const Welcome = () => {
  const { isTablet, isMobile, isXsMobile } = useMediaQueries();

  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  const handleCloseAuthModal = () => {
    setIsLoginMode(!isLoginMode);
    setShowAuthModal(false);
  };

  const setMovie = (id) => {
    setSelectedMovie(id);
    setShowDetailsModal(true);
  };
  const allMovies = [
    {
      id: "1",
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "1985",
      length: "1 hr 26 min",
      likes: "5",
      tags: ["topRated", "trending"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "2",
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2010",
      length: "1 hr 15 min",
      likes: "20",
      tags: ["topRated", "recentlyAdded"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "3",
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2024",
      length: "1 hr 24 min",
      likes: "72",
      tags: ["mustWatch"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "4",
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2016",
      length: "1 hr 10 min",
      likes: "25",
      tags: ["mustWatch", "recentlyAdded"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
  ];

  const chunkedMovies = chunkArray(allMovies, 2);

  return (
    <div className={`${styles.welcomePage} text-light d-flex flex-column`}>
      <DetailsModal
        showModal={showDetailsModal}
        setShowModal={setShowDetailsModal}
        selectedMovie={selectedMovie}
        allMovies={allMovies}
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
                className={`${styles.link} text-nowrap fw-semibold`}
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
                {chunkArray(allMovies, 2).map((moviePair, index) => (
                  <Carousel.Item className="" key={index}>
                    <Row className={styles.carouselRow}>
                      {moviePair.map((movie, subIndex) => (
                        <BasicMovieCard
                          height="16rem"
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
                {allMovies.map((movie, index) => (
                  <Carousel.Item className="" key={index}>
                    <Row className={styles.carouselRow}>
                      <BasicMovieCard
                        height={isXsMobile ? "15rem" : "20rem"}
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
              {allMovies.map((movie, index) => (
                <BasicMovieCard
                  height="13rem"
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
