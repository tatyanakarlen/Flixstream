import { useState, useEffect, useContext } from "react";
import "../index.css";
import DetailsModal from "./global/components/DetailsModal/DetailsModal";
import SearchResultsMovieCard from "./global/components/SearchResultsMovieCard/SearchResultsMovieCard";
import SideNav from "./global/components/SideNav/SideNav";
import TopNavSearch from "./global/components/TopNavSearch/TopNavSearch";
import { Outlet, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import styles from "./FlixMain.module.css";
import MoviePlayer from "./components/MoviePlayer/MoviePlayer";
import useMediaQueries from "./utils/UseMediaQuery";
import MobileNav from "./global/components/MobileNav/MobileNav";
import { UserContext } from "../userContext";
import { supabase } from "../supabaseClient";

const FlixMain = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviePlayed, setMoviePlayed] = useState(null);

  

  const { isTablet, isMobile, isXsMobile } = useMediaQueries();

  const { user, loading } = useContext(UserContext);

  const setMovie = (id) => {
    setSelectedMovie(id);
    setShowModal(true);
    console.log(selectedMovie, "selectedMovie");
  };

  const addToUserList = async (movieId) => {
    if (loading) return; 

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
        throw error; 
      }

      console.log("Movie removed from user list:", data);

      await fetchUserMovies(); // Re-fetch the user movies after deletion
    } catch (error) {
      console.error("Error removing movie from user list:", error.message);
    }
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
    }
    // setLoading(false);
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
      setUserMovies(data); // Update state with fetched data
    } catch (error) {
      console.error("Unexpected error fetching user movies:", error);
      return null;
    }
  }

  async function fetchContinueWatching() {
    try {
      const { data, error } = await supabase
        .from("continue_watching")
        .select("*")
        .eq("user_id", user.id);

      if (error) throw error;

      setContinueWatching(data);
    } catch (error) {
      console.error("Error fetching continue watching list:", error);
    }
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);

  useEffect(() => {
    if (!loading && user) {
      fetchUserMovies();
      fetchContinueWatching();
    }
  }, [user, loading]);

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
    moviePlayed,
    continueWatching,
    setContinueWatching,
    fetchContinueWatching,
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
          movies={movies}
          continueWatching={continueWatching}
          setContinueWatching={setContinueWatching}
          fetchContinueWatching={fetchContinueWatching}
          userMovies={userMovies}
          addToUserList={addToUserList}
          removeFromUserList={removeFromUserList}
          selectedMovie={selectedMovie}
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
                      movies={movies}
                      setSearchInput={setSearchInput}
                    />
                  )}
                  <div>
                    {searchInput.length === 0 && filteredData.length === 0 ? (
                      <Outlet context={contextValue} />
                    ) : (
                      <div className="pe-3 text-light mt-4">
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
                              removeFromUserList={removeFromUserList}
                            />
                          ))}
                        </Row>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <MobileNav
                setSearchInput={setSearchInput}
                setFilteredData={setFilteredData}
              />
            </Col>
          </Row>
        ) : (
          <MoviePlayer />
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} h-100`}>
      <DetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedMovie={selectedMovie}
        movies={movies}
        continueWatching={continueWatching}
        setContinueWatching={setContinueWatching}
        fetchContinueWatching={fetchContinueWatching}
        userMovies={userMovies}
        addToUserList={addToUserList}
        removeFromUserList={removeFromUserList}
      />
      {!location.pathname.includes("play") ? (
        <Row className={`${styles.layoutRow} h-100`}>
          <SideNav
            setSearchInput={setSearchInput}
            setFilteredData={setFilteredData}
          />

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
                    <div className="text-light mt-4 pe-3">
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
                            addToUserList={addToUserList}
                            removeFromUserList={removeFromUserList}
                            continueWatching={continueWatching}
                            setContinueWatching={setContinueWatching}
                            fetchContinueWatching={fetchContinueWatching}
                            userMovies={userMovies}
                          />

                          // showModal={showModal}
                          // setShowModal={setShowModal}
                          // selectedMovie={selectedMovie}
                          // movies={movies}
                          // continueWatching={continueWatching}
                          // setContinueWatching={setContinueWatching}
                          // fetchContinueWatching={fetchContinueWatching}
                          // userMovies={userMovies}
                          // addToUserList={addToUserList}
                          // removeFromUserList={removeFromUserList}
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
        <MoviePlayer />
      )}
    </div>
  );
};

export default FlixMain;
