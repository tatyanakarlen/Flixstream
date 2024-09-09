import { useState, useEffect, useContext } from "react";
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
import { UserContext } from "../userContext";
import { supabase } from "../supabaseClient";

const FlixMain = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviePlayed, setMoviePlayed] = useState(null);
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const { isTablet, isMobile, isXsMobile } = useMediaQueries();

  const { user, loading } = useContext(UserContext);

  const setMovie = (id) => {
    setSelectedMovie(id);
    setShowModal(true);
  };

  // Function to fetch all movies
  const fetchAllMovies = async () => {
    // setLoading(true);
    const { data, error } = await supabase.from("movies").select("*"); // Fetch all columns

    if (error) {
      console.error("Error fetching movies:", error);
      // setError(error.message);
    } else {
      setMovies(data);
      console.log("All movies:", data);
    }
    // setLoading(false);
  };

  const addToUserList = async (movieId) => {
    if (loading) return; // Ensure not loading
  
    if (!user) {
      console.error("User must be logged in to add movies to their list.");
      return;
    }
  
    try {
      const { data, error } = await supabase
        .from("user_movies")
        .insert([{ user_id: user.id, movie_id: movieId }]);
  
      if (error) {
        if (error.code === "23505") {
          console.warn("Movie already in user list.");
        } else {
          throw error;
        }
      } else {
        console.log("Movie added to user list:", data);
        await fetchUserMovies(); // Re-fetch the user movies after adding
      }
    } catch (error) {
      console.error("Error adding movie to user list:", error);
    }
  };

  const removeFromUserList = async (movieId) => {
    // if (loading) return;

    if (!user) {
      console.error("User must be logged in to remove movies from their list.");
      return;
    }

    try {
      // Perform the delete operation
      const { data, error } = await supabase
        .from("user_movies")
        .delete()
        .eq("user_id", user.id)
        .eq("movie_id", movieId);

      if (error) {
        throw error; // Throw error to be caught in the catch block
      }

      console.log("Movie removed from user list:", data);

      await fetchUserMovies(); // Re-fetch the user movies after deletion
    } catch (error) {
      console.error("Error removing movie from user list:", error.message);
    }
  };

  async function fetchUserMovies() {
    try {
      const userId = user.id; // Retrieve the current user ID

      const { data, error } = await supabase.rpc("fetch_user_movies", {
        uid: userId,
      });

      if (error) {
        console.error(
          "Error fetching user movies:",
          error.message,
          error.details
        );
        return null;
      }

      console.log("User movies:", data);
      setUserMovies(data); // Update state with fetched data
    } catch (error) {
      console.error("Unexpected error fetching user movies:", error);
      return null;
    }
  }

  useEffect(() => {
    fetchAllMovies();
    fetchUserMovies();
  }, []); // Empty dependency array ensures it runs only once on mount

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
    addToUserList,
    userMovies,
    removeFromUserList,
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
                              addToUserList={addToUserList}
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
