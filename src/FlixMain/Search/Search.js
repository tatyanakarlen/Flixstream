import React, { useEffect } from "react";
import { Button, Image, Row, Col } from "react-bootstrap";
import styles from "./Search.module.css";
import { useOutletContext } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import ImageOverlay from "../global/components/ImageOverlay/ImageOverlay";
import MovieCard from "../global/components/MovieCard/MovieCard";

const nature1 = process.env.PUBLIC_URL + "/images/nature1.jpg";

const Search = () => {
  const [
    searchMode,
    setSearchMode,
    allMovies,
    filteredData,
    setFilteredData,
    searchInput,
    setSearchInput, 
    setShowModal
  ] = useOutletContext();

  useEffect(() => {
    setSearchMode(true);
  }, []);

  const history = [
    {
      image: nature1,
      title: "Thriller",
      genre: "Action",
    },
    {
      image: nature1,
      title: "Sci-Fi adventure",
      genre: "Horror",
    },
    {
      image: nature1,
      title: "Mystery thriller",
      genre: "Documentary",
    },
    {
      image: nature1,
      title: "Romantic comedy",
      genre: "Comedy",
    },
    {
      image: nature1,
      title: "Sci-Fi fantasy",
      genre: "Stand-up special",
    },
  ];

  const recommended = [
    {
      image: nature1,
      title: "Action & Adventure",
    },
    {
      image: nature1,
      title: "Sci-Fi & Fantasy",
    },
    {
      image: nature1,
      title: "Comedy Shows",
    },
    {
      image: nature1,
      title: "Drama Series",
    },
    {
      image: nature1,
      title: "Documentaries",
    },
    {
      image: nature1,
      title: "Crime & Mystery",
    },
    {
      image: nature1,
      title: "Animated Series",
    },
    {
      image: nature1,
      title: "Romantic Movies",
    },
  ];

  return (
    <div className="blackContainer px-5 py-4">
      {searchInput.length > 0 && filteredData.length === 0 ? (
        <div className="text-light">No search results</div>
      ) : filteredData && filteredData.length === 0 ? (
        /// added additional condition here
        <>
          <div className="d-flex w-100 justify-content-between mt-2">
            <h4 className="text-light">Explore titles</h4>
            <Button className={`${styles.clearHistoryBTN} rounded-pill`}>
              Clear history
            </Button>
          </div>
          <div className="d-flex flex-column mt-4 gap-4">
            {history.map((movie, index) => (
              <div
                role="button"
                key={index}
                className={`${styles.movieTitle} d-flex justify-content-between align-items-center`}
              >
                <div className="d-flex gap-3">
                  <Image
                    roundedCircle
                    fluid
                    width={50}
                    height={50}
                    src={movie.image}
                  />
                  <div className="d-flex flex-column">
                    <span className="text-light fs-6 fw-semibold">
                      {movie.title}
                    </span>
                    <small>{movie.genre}</small>
                  </div>
                </div>
                <FaChevronRight className="text-light me-2 fs-5" />
              </div>
            ))}
          </div>
          <div className="text-light mt-5">
            <h5>Recommended for you</h5>
            <Row className="mt-4">
              {recommended.map((movie, index) => (
                <Col sm={12} lg={4} xl={3} className="mb-4" key={index}>
                  <div>
                    <ImageOverlay item={movie} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </>
      ) : (
        <div>
           <h4 className="text-light mt-1">Search results</h4>
          <Row className="mt-4">
            {filteredData.map((movie, index) => (
              <MovieCard setShowModal={setShowModal} movie={movie} key={index} />
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Search;
