import React, { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { TbMovie } from "react-icons/tb";
import BasicMovieCard from "../../global/components/BasicMovieCard/BasicMovieCard";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import DetailsModal from "../../global/components/DetailsModal/DetailsModal";
import styles from "./Welcome.module.css";
import AuthModal from "./AuthModal/AuthModal";

const Welcome = () => {
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCloseAuthModal = () => {
    setIsLoginMode(!isLoginMode)
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
  return (
    <div className="text-light py-2 px-4 h-100 d-flex flex-column">
      <DetailsModal
        showModal={showDetailsModal}
        setShowModal={setShowDetailsModal}
        selectedMovie={selectedMovie}
        allMovies={allMovies}
      />
       {/* const [isLoginMode, setIsLoginMode] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false); */}
      <AuthModal
        handleCloseAuthModal={handleCloseAuthModal}
        show={showAuthModal}
      />
      <Navbar className="justify-content-between" expand="lg">
        <Navbar.Brand
          className="d-flex align-items-center gap-2 fw-semibold"
          href="/"
        >
          <TbMovie />
          FlixStream
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-3">
              <CustomBTN
                text="Register"
                textColor="text-dark fw-semibold"
                variant="light"
                icon={false}
                padding="px-4"
                onClick={() => setShowAuthModal(true)}
              />
              <Nav.Link
              onClick={() => {
                setIsLoginMode(true)
                setShowAuthModal(true)
              }}
                className={`${styles.link} text-nowrap fw-semibold`}
              >
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="d-flex justify-content-center align-items-center flex-column flex-grow-1">
        <h1 className="fw-semibold">Welcome to FlixStream</h1>
        <h5 className="fw-light mt-1">
          Stream the latest blockbusters and timeless classics
        </h5>
        <div className="mt-3">
          <CustomBTN
            text="Sign Up for Free"
            textColor="text-light"
            bgColor="redBTNbg"
          />
        </div>
        <h4 className="mt-5">Popular Movies</h4>
        <Row className="mt-5 w-75">
          {allMovies.map((movie, index) => (
            <BasicMovieCard key={index} movie={movie} setMovie={setMovie} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Welcome;
