import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { GoHomeFill } from "react-icons/go";
import { BiSolidFilm } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbMovie } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import styles from "./MobileNav.module.css";
import useMediaQueries from "../../../utils/UseMediaQuery";

const MobileNav = ({ setSearchInput, setFilteredData }) => {
  const location = useLocation();
  const { isTablet, isMobile, isXsMobile } = useMediaQueries();

  const handleLinkClick = () => {
    setSearchInput("");
    setFilteredData([]);
  };

  const links = [
    {
      text: "Home",
      link: "/dashboard",
      icon: <GoHomeFill />,
    },
    {
      text: "Discover",
      link: "/dashboard/discover",
      icon: <BiSolidCameraMovie />,
    },
    {
      text: "My List",
      link: "/dashboard/my-list",
      icon: <FaThList />,
    },
    {
      text: "Profile",
      link: "/dashboard/profile-settings",
      icon: <FaGear />,
    },
    {
      text: "Logout",
      link: "/dashboard/profile-settings",
      icon: <MdLogout />,
    },
  ];

  return (
    <Navbar className={styles.nav} fixed="bottom" bg="dark" variant="dark">
      <Nav
        className={`${styles.navInner} justify-content-between text-light w-100 px-4`}
      >
        {links.map((link, index) => (
          <Nav.Item key={index}>
            <Link
              onClick={handleLinkClick}
              className={`${
                styles.navLink
              } d-flex flex-column align-items-center text-decoration-none ${
                location.pathname === link.link ? styles.activeLink : ""
              }`}
              to={link.link}
            >
              <span className="fs-5">{link.icon}</span>
              {!isXsMobile && <small>{link.text}</small>}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
};

export default MobileNav;
