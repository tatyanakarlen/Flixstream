import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import "../index.css";
import HomePageHero from "./components/HomePageHero/HomePageHero";
import DiscoverNewReleases from "./components/DiscoverNewReleases/DiscoverNewReleases";
import Search from "./Search/Search";
import DetailsModal from "./global/components/DetailsModal/DetailsModal";
import SearchResultsMovieCard from "./global/components/SearchResultsMovieCard/SearchResultsMovieCard";
import SideNav from "./global/components/SideNav/SideNav";
import TopNavSearch from "./global/components/TopNavSearch/TopNavSearch";
import { Outlet, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import styles from "./FlixMain.module.css";

const FlixMain = () => {
  const location = useLocation();
  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviePlayed, setMoviePlayed] = useState(null);
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  console.log(searchInput.length, "search input");
  console.log(filteredData.length, "filtered data");

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
    {
      id: "5",
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2020",
      length: "1 hr 25 min",
      likes: "12",
      tags: ["topRated", "mustWatch"],
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
      id: "6",
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2023",
      length: "1 hr 10 min",
      likes: "19",
      tags: ["justForYou"],
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
      id: "7",
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2021",
      length: "1 hr 05 min",
      likes: "8",
      tags: ["topRated", "popular"],
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
      id: "8",
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2017",
      length: "1 hr 20 min",
      likes: "3",
      tags: ["topRated", "popular"],
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
      id: "9",
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2020",
      length: "1 hr 08 min",
      likes: "5",
      tags: ["popular"],
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
      id: "10",
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2014",
      length: "1 hr 08 min",
      likes: "20",
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
    {
      id: "11",
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2018",
      length: "1 hr 25 min",
      likes: "72",
      tags: ["topRated", "popular"],
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
      id: "12",
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2020",
      length: "1 hr 10 min",
      likes: "25",
      tags: ["justForYou"],
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
      id: "13",
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2017",
      length: "1 hr 03 min",
      likes: "12",
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
    {
      id: "14",
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2020",
      length: "1 hr 01 min",
      likes: "19",
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
      id: "15",
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2012",
      length: "1 hr 20 min",
      likes: "8",
      tags: ["popular"],
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
      id: "16",
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2019",
      length: "1 hr 05 min",
      likes: "3",
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

  const playMovie = (id) => {
    const movieToPlay = allMovies.find((movie) => movie.id === id);
    setMoviePlayed(movieToPlay);
    console.log(movieToPlay, "movie to play from flixmain");
  };

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
    playMovie,
    moviePlayed,
  };

  return (
    <div className="h-100">
      <Row className={`${styles.layoutRow} h-100`}>
        <Col className={styles.fixedSideNav} xs={2}>
          <div className="h-100 p-3">
            <SideNav />
          </div>
        </Col>
        <Col className={styles.scrollableContent}>
          <div className="h-100 pt-3 pe-3 pb-3 ps-2">
            <div className="h-100">
              <TopNavSearch
                searchInput={searchInput}
                filteredData={filteredData}
                setFilteredData={setFilteredData}
                allMovies={allMovies}
                setSearchInput={setSearchInput}
              />
              <div>
                {searchInput.length === 0 && filteredData.length === 0 ? (
                  <Outlet context={contextValue} />
                ) : (
                  <div className="text-light">
                    <p className="mt-1">
                      {filteredData && filteredData.length} results found for
                    </p>
                    <h4>{searchInput}</h4>
                    <Row className="mt-4">
                      {filteredData.map((movie, index) => (
                        <SearchResultsMovieCard
                          setShowModal={setShowModal}
                          movie={movie}
                          setMovie={setMovie}
                          key={index}
                        />
                      ))}
                    </Row>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    // <div className="d-flex flex-column h-100">
    //   <DetailsModal
    //     showModal={showModal}
    //     setShowModal={setShowModal}
    //     selectedMovie={selectedMovie}
    //     allMovies={allMovies}
    //   />
    //   {!location.pathname.includes("play") && (
    //     <Nav
    //       searchMode={searchMode}
    //       setSearchMode={setSearchMode}
    //       filteredData={filteredData}
    //       setFilteredData={setFilteredData}
    //       allMovies={allMovies}
    //       searchInput={searchInput}
    //       setSearchInput={setSearchInput}
    //     />
    //   )}

    //   {location.pathname === "/flixStream" ? (
    //     <div>
    //       {searchMode ? (
    //         <Search
    //           setSearchMode={setSearchMode}
    //           filteredData={filteredData}
    //           searchInput={searchInput}
    //           setShowModal={setShowModal}
    //           setMovie={setMovie}
    //         />
    //       ) : (
    //         <>
    //           <HomePageHero setShowModal={setShowModal} />
    //           <DiscoverNewReleases allMovies={allMovies} setMovie={setMovie} setShowModal={setShowModal}/>
    //         </>
    //       )}
    //     </div>
    //   ) : (
    //     <Outlet context={contextValue} />
    //   )}
    // </div>
  );
};

export default FlixMain;
