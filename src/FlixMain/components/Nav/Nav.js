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
        <BootstrapNav
          className={`${styles.innerNav} justify-content-between w-100 align-items-center`}
        >
          <div className="d-flex gap-3">
            {links.map((link, index) => (
              <BootstrapNav.Link
                key={index}
                className="d-flex align-items-center gap-2"
                href={link.link}
              >
                <span>{link.icon}</span>
                <small>{link.text}</small>
              </BootstrapNav.Link>
            ))}
          </div>
          <Image src={image} height={35} width={35} roundedCircle />
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
