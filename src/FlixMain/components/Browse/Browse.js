import React from "react";
import HomePageHero from "../HomePageHero/HomePageHero";
import DiscoverNewReleases from "../DiscoverNewReleases/DiscoverNewReleases";
import ContinueWatching from "../ContinueWatching/ContinueWatching";
import { useOutletContext } from "react-router-dom";


const Browse = () => {
  const { setShowModal, allMovies, setMovie } = useOutletContext();
  return (
    <div>
      <HomePageHero setShowModal={setShowModal}/>
      <ContinueWatching />
      <DiscoverNewReleases
        allMovies={allMovies}
        setMovie={setMovie}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Browse;
