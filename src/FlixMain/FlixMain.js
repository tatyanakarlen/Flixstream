import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import HomePageHero from "./components/HomePageHero/HomePageHero";
import DiscoverNewReleases from "./components/DiscoverNewReleases/DiscoverNewReleases";
import DetailsModal from "./global/components/DetailsModal/DetailsModal";
import { Outlet, useOutlet, useLocation } from "react-router-dom";

const FlixMain = () => {
  const location = useLocation();
  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const setMovie = (id) => {
    setSelectedMovie(id);
    setShowModal(true);
  };

  const allMovies = [
    {
      id: "1",
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      year: "1985",
      length: "1 hr 26 min",
      likes: "5",
      tags: ["topRated", "trending"],
    },
    {
      id: "2",
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      year: "2010",
      length: "1 hr 15 min",
      likes: "20",
      tags: ["topRated", "recentlyAdded"],
    },
    {
      id: "3",
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      year: "2024",
      length: "1 hr 24 min",
      likes: "72",
      tags: ["mustWatch"],
    },
    {
      id: "4",
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      year: "2016",
      length: "1 hr 10 min",
      likes: "25",
      tags: ["mustWatch", "recentlyAdded"],
    },
    {
      id: "5",
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      year: "2020",
      length: "1 hr 25 min",
      likes: "12",
      tags: ["topRated", "mustWatch"],
    },
    {
      id: "6",
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      year: "2023",
      length: "1 hr 10 min",
      likes: "19",
      tags: ["justForYou"],
    },
    {
      id: "7",
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      year: "2021",
      length: "1 hr 05 min",
      likes: "8",
      tags: ["topRated", "popular"],
    },
    {
      id: "8",
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      year: "2017",
      length: "1 hr 20 min",
      likes: "3",
      tags: ["topRated", "popular"],
    },
    {
      id: "9",
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      year: "2020",
      length: "1 hr 08 min",
      likes: "5",
      tags: ["popular"],
    },
    {
      id: "10",
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      year: "2014",
      length: "1 hr 08 min",
      likes: "20",
      tags: ["mustWatch", "recentlyAdded"],
    },
    {
      id: "11",
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      year: "2018",
      length: "1 hr 25 min",
      likes: "72",
      tags: ["topRated", "popular"],
    },
    {
      id: "12",
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      year: "2020",
      length: "1 hr 10 min",
      likes: "25",
      tags: ["justForYou"],
    },
    {
      id: "13",
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      year: "2017",
      length: "1 hr 03 min",
      likes: "12",
      tags: ["mustWatch", "recentlyAdded"],
    },
    {
      id: "14",
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      year: "2020",
      length: "1 hr 01 min",
      likes: "19",
      tags: ["topRated", "trending"],
    },
    {
      id: "15",
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      year: "2012",
      length: "1 hr 20 min",
      likes: "8",
      tags: ["popular"],
    },
    {
      id: "16",
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      year: "2019",
      length: "1 hr 05 min",
      likes: "3",
      tags: ["mustWatch", "recentlyAdded"],
    },
  ];

  const contextValue = {
    searchMode,
    setSearchMode,
    allMovies,
    filteredData,
    setFilteredData,
    searchInput,
    setSearchInput,
    setShowModal,
    selectedMovie,
    setSelectedMovie,
    setMovie,
  };

  return (
    <div className="d-flex flex-column h-100">
      <DetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedMovie={selectedMovie}
        allMovies={allMovies}
      />
      <Nav
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        allMovies={allMovies}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {location.pathname === "/flixStream" ? (
        <div>
          <HomePageHero />
          <DiscoverNewReleases allMovies={allMovies} setMovie={setMovie} />
        </div>
      ) : (
        <Outlet
          context={contextValue}
        />
      )}
    </div>
  );
};

export default FlixMain;
