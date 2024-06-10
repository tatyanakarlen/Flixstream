import React, { useState } from "react";
import {
  Nav as BootstrapNav,
  Navbar,
  NavDropdown,
  Image,
  Button,
} from "react-bootstrap";
import styles from "./Nav.module.css";
import { FaVideo, FaList, FaSearch } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { BiSolidMovie } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";

const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

const Nav = ({
  searchMode,
  setSearchMode,
  filteredData,
  setFilteredData,
  allMovies,
  searchInput,
  setSearchInput,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const links = [
    {
      text: "Browse",
      link: "/flixStream",
      onClick: () => {
        navigate("/flixStream");
        setSearchMode(false);
      },
    },
    {
      text: "Search",
      link: null,
      onClick: () => {
        setSearchMode(true);
      },
    },
    {
      text: "My List",
      link: "/",
      onClick: () => setSearchMode(false),
    },
  ];
  return (
    <Navbar className={`${styles.customNav}`} expand="lg">
      {!searchMode ? (
        <Navbar.Brand
          className={`${styles.navBrand} ms-2 fw-semibold`}
          href="#home"
        >
          FlixStream
        </Navbar.Brand>
      ) : (
        <div className="w-50 position-relative">
          <FaSearch
            className={`${styles.searchIcon} text-light position-absolute`}
          />
          <input
            value={searchInput}
            onChange={handleChange}
            className="rounded-pill px-3 py-1"
            placeholder="Search movies, series, and documentaries"
          ></input>
        </div>
      )}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav
          className={`${styles.innerNav} w-100 align-items-center justify-content-end`}
        >
          <div className={`${styles.navMenu} d-flex align-items-center`}>
            {links.map((link, index) => (
              <span
                onClick={link.onClick && link.onClick}
                key={index}
                className={`d-flex align-items-center ${styles.link} ${
                  location.pathname === "/flixStream" &&
                  searchMode &&
                  link.link === null
                    ? styles.activeLink
                    : location.pathname === link.link && !searchMode
                    ? styles.activeLink
                    : ""
                }`}
              >
                <span>{link.text}</span>
              </span>
            ))}

            <span className={styles.iconSpan}>
              <IoMdNotifications className="text-light fs-5" />
            </span>

            {/* <span className={styles.iconSpan}>
              <IoMdSettings className="text-light fs-5" />
            </span> */}

            <Image src={image} height={30} width={30} roundedCircle />
          </div>
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
