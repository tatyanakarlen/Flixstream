import React from "react";
import {
  Nav as BootstrapNav,
  Navbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
import styles from "./Nav.module.css";
import { FaVideo, FaList, FaSearch } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { BiSolidMovie } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

const Nav = () => {
  const links = [
    {
      text: "Browse",
      icon: <FaVideo />,
      link: "/",
    },
    {
      text: "My List",
      icon: <FaList />,
      link: "/",
    },

    {
      text: "Movies",
      icon: <BiSolidMovie />,
      link: "/",
    },
    {
      text: "Search",
      icon: <FaSearch />,
      link: "search",
    },
  ];
  return (
    <Navbar className={`${styles.customNav}`} expand="lg">
      <Navbar.Brand className="fw-semibold fs-4" href="#home">
        FlixStream
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav
          className={`${styles.innerNav} justify-content-between w-100 align-items-center`}
        >
          <div className="d-flex gap-3">
            {links.map((link, index) => (
              <Link
                key={index}
                className="d-flex align-items-center gap-2"
                to={link.link}
              >
                <span>{link.icon}</span>
                <small>{link.text}</small>
              </Link>
            ))}
          </div>
          <div className="d-flex align-items-center gap-3">
            <IoMdNotifications className="text-light fs-5" />
            <Image src={image} height={27} width={27} roundedCircle />
          </div>
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
