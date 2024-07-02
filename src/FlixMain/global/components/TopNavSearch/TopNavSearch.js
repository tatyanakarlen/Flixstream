import React from "react";
import styles from "./TopNavSearch.module.css";
import { FaSearch } from "react-icons/fa";
import NotificationsProfileBar from "../NotificationsProfileBar/NotificationsProfileBar";

const TopNavSearch = ({
  searchInput,
  filteredData,
  setFilteredData,
  allMovies,
  setSearchInput,
}) => {
  const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

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
    <div className="d-flex justify-content-between">
      <div className="w-75 position-relative">
        <FaSearch
          className={`${styles.searchIcon} text-light position-absolute fs-5`}
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
