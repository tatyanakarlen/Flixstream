import React from "react";
import HomePageHero from "../HomePageHero/HomePageHero";
import DiscoverNewReleases from "../DiscoverNewReleases/DiscoverNewReleases";
import ContinueWatching from "../ContinueWatching/ContinueWatching";
import { useOutletContext } from "react-router-dom";
import ScrollableList from "../../global/components/ScrollableList/ScrollableList";
import { Row, Nav, Navbar } from "react-bootstrap";
import styles from "./Home.module.css";
import useMediaQueries from "../../utils/UseMediaQuery";

const Home = () => {
  const { setShowModal, allMovies, setMovie, continueWatching } =
    useOutletContext();

  const { isTablet, isMobile, isXsMobile } = useMediaQueries();
  return (
    <div>
      {isTablet ? (
        <div>this is tablet</div>
      ) : isMobile ? (
        <div>this is mobile</div>
      ) : (
        <div>this is desktop</div>
      )}
    </div>
    // <div>
    //   <HomePageHero setShowModal={setShowModal} />
    //   <div className="mt-4">
    //     <h4 className="text-light fw-semibold">Continue watching</h4>

    //     <ScrollableList>
    //       {continueWatching.map((movie, index) => (
    //         <li
    //           key={index}
    //           className={`${styles.cardContainer} scrollableListCardContainer`}
    //         >
    //           <ContinueWatching movie={movie} />
    //         </li>
    //       ))}
    //     </ScrollableList>
    //   </div>

    //   <DiscoverNewReleases
    //     allMovies={allMovies}
    //     setMovie={setMovie}
    //     setShowModal={setShowModal}
    //   />
    // </div>
  );
};

export default Home;
