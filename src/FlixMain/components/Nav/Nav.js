import React from "react";
import { Nav as BootstrapNav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./Nav.module.css";
import { FaVideo, FaList, FaSearch } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { BiSolidMovie } from "react-icons/bi";

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
      text: "TV Series",
      icon: <MdOutlineComputer />,
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
      link: "/",
    },
  ];
  return (
    <Navbar className={`${styles.customNav}`} expand="lg">
      <Navbar.Brand className="fw-semibold" href="#home">
        FlixStream
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav className={`${styles.innerNav}`}>
          {links.map((link, index) => (
            <BootstrapNav.Link
              key={index}
              className="d-flex align-items-center gap-2"
              href={link.link}
            >
              <span>{link.icon}</span>
              <span>{link.text}</span>
            </BootstrapNav.Link>
          ))}
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
