import React from "react";
import HomePageHero from "../HomePageHero/HomePageHero";
import DiscoverNewReleases from "../DiscoverNewReleases/DiscoverNewReleases";
import ContinueWatching from "../ContinueWatching/ContinueWatching";
import { useOutletContext } from "react-router-dom";
import ScrollableList from "../../global/components/ScrollableList/ScrollableList";
import { Row, Nav, Navbar, Carousel } from "react-bootstrap";
import styles from "./Home.module.css";
import useMediaQueries from "../../utils/UseMediaQuery";
import { chunkArray } from "../../utils/chuckArray";
import BasicMovieCard from "../../global/components/BasicMovieCard/BasicMovieCard";


const Home = () => {
  const {
    setShowModal,
    movies,
    setMovie,
    continueWatching,
    setContinueWatching,
    fetchContinueWatching,
    addToUserList,
    removeFromUserList,
    userMovies,
  } = useOutletContext();

  const firstSixMovies = movies.slice(0, 6);
  const firstThreeMovies = movies.slice(0, 3);

  const {
    isTablet,
    isDesktopOrLaptop,
    isLgDesktopOrLaptop,
  } = useMediaQueries();
  return (
    <div>
      {isDesktopOrLaptop || isLgDesktopOrLaptop ? (
        <HomePageHero fetchContinueWatching={fetchContinueWatching} setContinueWatching={setContinueWatching} continueWatching={continueWatching} movies={movies} setShowModal={setShowModal} />
      ) : (
        <div className="w-100 mt-4 pe-md-4 pe-lg-3 pe-3">
          <h4 className="text-light fw-semibold mt-4">Recently Added</h4>
          {isTablet ? (
            <Carousel
              className={`${styles.carousel} mt-3`}
              controls={false}
              interval={null}
            >
              {chunkArray(firstSixMovies, 2).map((moviePair, index) => (
                <Carousel.Item className="" key={index}>
                  <Row className={styles.carouselRow}>
                    {moviePair.map((movie, subIndex) => (
                      <BasicMovieCard
                        key={index}
                        movie={movie}
                        setMovie={setMovie}
                        addToUserList={addToUserList}
                        removeFromUserList={removeFromUserList}
                      />
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Carousel
              className={styles.carousel}
              controls={false}
              interval={null}
            >
              {firstThreeMovies.map((movie, index) => (
                <Carousel.Item className="" key={index}>
                  <Row className={styles.carouselRow}>
                    <BasicMovieCard
                      key={index}
                      movie={movie}
                      setMovie={setMovie}
                      setShowModal={setShowModal}
                      addToUserList={addToUserList}
                      removeFromUserList={removeFromUserList}
                    />
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      )}
      <div className="mt-4">
        <h4 className="text-light fw-semibold">Continue watching</h4>

        <ScrollableList>
          {continueWatching.map((movie, index) => (
            <li
              key={index}
              className={`${styles.cardContainer} scrollableListCardContainer`}
            >
              <ContinueWatching
                movie={movie}
                continueWatching={continueWatching}
                setContinueWatching={setContinueWatching}
                fetchContinueWatching={fetchContinueWatching}
              />
            </li>
          ))}
        </ScrollableList>
      </div>

      <DiscoverNewReleases
        movies={movies}
        setMovie={setMovie}
        setShowModal={setShowModal}
        addToUserList={addToUserList}
        removeFromUserList={removeFromUserList}
        userMovies={userMovies}
      />
    </div>
  );
};

export default Home;
