import { useState, useEffect } from "react";
import "../index.css";
import DetailsModal from "./global/components/DetailsModal/DetailsModal";
import SearchResultsMovieCard from "./global/components/SearchResultsMovieCard/SearchResultsMovieCard";
import SideNav from "./global/components/SideNav/SideNav";
import TopNavSearch from "./global/components/TopNavSearch/TopNavSearch";
import { Outlet, useLocation } from "react-router-dom";
import { Col, Row, Nav, Navbar } from "react-bootstrap";
import styles from "./FlixMain.module.css";
import MoviePlayer from "./components/MoviePlayer/MoviePlayer";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import useMediaQueries from "./utils/UseMediaQuery";
import MobileNav from "./global/components/MobileNav/MobileNav";
import { supabase } from "../supabaseClient";

const FlixMain = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviePlayed, setMoviePlayed] = useState(null);
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const { isTablet, isMobile, isXsMobile } = useMediaQueries();

  const setMovie = (id) => {
    setSelectedMovie(id);
    setShowModal(true);
  };

   // Function to fetch all movies
   const fetchAllMovies = async () => {
    // setLoading(true);
    const { data, error } = await supabase
      .from('movies')
      .select('*'); // Fetch all columns

    if (error) {
      console.error('Error fetching movies:', error);
      // setError(error.message);
    } else {
      setMovies(data);
      console.log('All movies:', data);
    }
    // setLoading(false);
  };

  // Use useEffect to fetch data when component mounts
  useEffect(() => {
    fetchAllMovies();
  }, []); // Empty dependency array ensures it runs only once on mount

  // const allMovies = [
  //   {
  //     id: "1",
  //     image: sciFi,
  //     title: "Fantasy Realm",
  //     description: "Journey through magical lands and epic adventures.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "1985",
  //     length: "1 hr 26 min",
  //     likes: "5",
  //     tags: ["topRated", "trending"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "2",
  //     image: people,
  //     title: "Mystery Chronicles",
  //     description: "Unraveling the most intriguing and puzzling cases.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2010",
  //     length: "1 hr 15 min",
  //     likes: "20",
  //     tags: ["topRated", "recentlyAdded"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "3",
  //     image: sciFi,
  //     title: "Historical Insights",
  //     description: "Diving deep into significant events and eras of the past.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2024",
  //     length: "1 hr 24 min",
  //     likes: "72",
  //     tags: ["mustWatch"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "4",
  //     image: people,
  //     title: "Comedy Highlights",
  //     description: "Laugh out loud with the best comedies and sitcoms.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2016",
  //     length: "1 hr 10 min",
  //     likes: "25",
  //     tags: ["mustWatch", "recentlyAdded"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "5",
  //     image: sciFi,
  //     title: "Horror Tales",
  //     description: "Prepare for spine-chilling scares.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2020",
  //     length: "1 hr 25 min",
  //     likes: "12",
  //     tags: ["topRated", "mustWatch"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "6",
  //     image: people,
  //     title: "Dramatic Stories",
  //     description: "Embrace powerful emotions and compelling narratives.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2023",
  //     length: "1 hr 10 min",
  //     likes: "19",
  //     tags: ["justForYou"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "7",
  //     image: sciFi,
  //     title: "Action Adventures",
  //     description: "Experience adrenaline-pumping thrills and epic battles.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2021",
  //     length: "1 hr 05 min",
  //     likes: "8",
  //     tags: ["topRated", "popular"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "8",
  //     image: people,
  //     title: "Fantasy Quests",
  //     description: "Embark on magical journeys and mythical adventures.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2017",
  //     length: "1 hr 20 min",
  //     likes: "3",
  //     tags: ["topRated", "popular"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "9",
  //     image: sciFi,
  //     title: "Fantasy Realm",
  //     description: "Journey through magical lands and epic adventures.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2020",
  //     length: "1 hr 08 min",
  //     likes: "5",
  //     tags: ["popular"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "10",
  //     image: people,
  //     title: "Mystery Chronicles",
  //     description: "Unraveling the most intriguing and puzzling cases.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2014",
  //     length: "1 hr 08 min",
  //     likes: "20",
  //     tags: ["mustWatch", "recentlyAdded"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "11",
  //     image: sciFi,
  //     title: "Historical Insights",
  //     description: "Diving deep into significant events and eras of the past.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2018",
  //     length: "1 hr 25 min",
  //     likes: "72",
  //     tags: ["topRated", "popular"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "12",
  //     image: people,
  //     title: "Comedy Highlights",
  //     description: "Laugh out loud with the best comedies and sitcoms.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2020",
  //     length: "1 hr 10 min",
  //     likes: "25",
  //     tags: ["justForYou"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "13",
  //     image: sciFi,
  //     title: "Horror Tales",
  //     description: "Prepare for spine-chilling scares.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2017",
  //     length: "1 hr 03 min",
  //     likes: "12",
  //     tags: ["mustWatch", "recentlyAdded"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "14",
  //     image: people,
  //     title: "Dramatic Stories",
  //     description: "Embrace powerful emotions and compelling narratives.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2020",
  //     length: "1 hr 01 min",
  //     likes: "19",
  //     tags: ["topRated", "trending"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "15",
  //     image: sciFi,
  //     title: "Action Adventures",
  //     description: "Experience adrenaline-pumping thrills and epic battles.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2012",
  //     length: "1 hr 20 min",
  //     likes: "8",
  //     tags: ["popular"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  //   {
  //     id: "16",
  //     image: people,
  //     title: "Fantasy Quests",
  //     description: "Embark on magical journeys and mythical adventures.",
  //     longDescription:
  //       "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
  //     year: "2019",
  //     length: "1 hr 05 min",
  //     likes: "3",
  //     tags: ["mustWatch", "recentlyAdded"],
  //     cast: [
  //       "Emma Hartley",
  //       "Jonathan Pierce",
  //       "Olivia Mason",
  //       "Marcus Bradley",
  //     ],
  //     creator: "Andy Breckman",
  //     genres: ["Adventure", "Mystery", "Thriller"],
  //   },
  // ];

  const continueWatching = [
    {
      title: "Fantasy Quests",
      timeRemaining: "12min 8s",
      image: people,
    },
    {
      title: "Action Adventures",
      timeRemaining: "19min 2s",
      image: people,
    },
    {
      title: "Dramatic Stories",
      timeRemaining: "23min 1s",
      image: people,
    },
    {
      title: "Comedy Highlights",
      timeRemaining: "12min 8s",
      image: people,
    },
  ];

  const playMovie = (id) => {
    const movieToPlay = movies.find((movie) => movie.id === id);
    setMoviePlayed(movieToPlay);
    console.log(movieToPlay, "movie to play from flixmain");
  };

  const contextValue = {
    searchMode,
    setSearchMode,
    movies,
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
    continueWatching,
  };

  if (isXsMobile || isMobile || isTablet) {
    return (
      <div className={`${styles.mobileWrapper}`}>
        <DetailsModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedMovie={selectedMovie}
          movies={movies}
        />
        {!location.pathname.includes("play") ? (
          <Row className={`${styles.layoutRow} h-100`}>
            <Col>
              <div className="h-100 pt-md-4 pb-md-4 ps-md-4 pt-lg-3 pb-lg-3 ps-lg-2 pt-3 pb-3 ps-3">
                <div className="h-100">
                  {!location.pathname.includes("profile-settings") && (
                    <TopNavSearch
                      searchInput={searchInput}
                      filteredData={filteredData}
                      setFilteredData={setFilteredData}
                      movie={movies}
                      setSearchInput={setSearchInput}
                    />
                  )}
                  <div>
                    {searchInput.length === 0 && filteredData.length === 0 ? (
                      <Outlet context={contextValue} />
                    ) : (
                      <div className="text-light mt-4">
                        <p className="mt-1">
                          {filteredData && filteredData.length} results found
                          for
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
              <MobileNav />
            </Col>
          </Row>
        ) : (
         
          <MoviePlayer playMovie={playMovie} moviePlayed={moviePlayed} />
         
        )}
      </div>
    );
  }

  return (
    <div className="h-100">
      <DetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedMovie={selectedMovie}
        movies={movies}
      />
      {!location.pathname.includes("play") ? (
        <Row className={`${styles.layoutRow} h-100`}>
          <SideNav />

          <Col className={styles.scrollableContent}>
            <div className="h-100 pt-3 pb-3 ps-2">
              <div className="h-100">
                {!location.pathname.includes("profile-settings") && (
                  <TopNavSearch
                    searchInput={searchInput}
                    filteredData={filteredData}
                    setFilteredData={setFilteredData}
                    movies={movies}
                    setSearchInput={setSearchInput}
                  />
                )}
                <div>
                  {searchInput.length === 0 && filteredData.length === 0 ? (
                    <Outlet context={contextValue} />
                  ) : (
                    <div className="text-light mt-4">
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
      ) : (
        <MoviePlayer playMovie={playMovie} moviePlayed={moviePlayed} />
      )}
    </div>
  );
};

export default FlixMain;
