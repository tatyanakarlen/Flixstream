import React from "react";
import styles from "./TopNavSearch.module.css";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOff } from "react-icons/io";
import { Image } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

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

    console.log(filteredData, "filtered data");
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
      <div className="d-flex gap-3 align-items-center">
        <div className="d-flex align-items-center gap-2 text-light me-2">
          <IoMdNotificationsOff className="ms-2 fs-5"/>
          <span>Notifications</span>
        </div>
        <Image src={image} height={30} width={30} roundedCircle />
        <FaChevronDown className="text-light"/>
      </div>
    </div>
  );
};

export default TopNavSearch;
