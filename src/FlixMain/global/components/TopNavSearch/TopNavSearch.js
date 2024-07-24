import React from "react";
import styles from "./TopNavSearch.module.css";
import { FaSearch } from "react-icons/fa";
import NotificationsProfileBar from "../NotificationsProfileBar/NotificationsProfileBar";
import useMediaQueries from "../../../utils/UseMediaQuery";

const TopNavSearch = ({
  searchInput,
  filteredData,
  setFilteredData,
  allMovies,
  setSearchInput,
}) => {

  const { isTablet, isMobile, isXsMobile, isDesktopOrLaptop } = useMediaQueries();


  const handleChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setSearchInput(userInput);

    if (userInput === "") {
      setFilteredData([]);
    } else {
      setFilteredData(
        allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(userInput)
        )
      );
    }

  };
  return (
    <div className={`d-flex justify-content-between ${!isDesktopOrLaptop ? "gap-1" : "gap-3"} pe-3`}>
      <div className={`${styles.searchBar} ${isDesktopOrLaptop ? "w-75" : "w-100" } position-relative`}>
        <FaSearch
          className={`${styles.searchIcon} text-light position-absolute fs-6`}
        />
        <input
          value={searchInput}
          onChange={handleChange}
          className="ps-5 pt-2 pb-2 pe-2"
          placeholder="Search for movies"
        ></input>
      </div>
      <NotificationsProfileBar />
    </div>
  );
};

export default TopNavSearch;
