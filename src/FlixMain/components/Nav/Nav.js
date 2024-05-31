import React from "react";
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
import { Link } from "react-router-dom";
import CustomBTN from "../../../global/components/RedBTN/CustomBTN";

const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

const Nav = () => {
  const links = [
    {
      text: "Browse",
      //   icon: <FaVideo />,
      link: "/",
    },
    {
      text: "Search",
      //   icon: <FaSearch />,
      link: "search",
    },
    {
      text: "My List",
      //   icon: <FaList />,
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
          className={`${styles.innerNav} w-100 align-items-center justify-content-end`}
        >
          <div className={`${styles.navMenu} d-flex align-items-center`}>
            {links.map((link, index) => (
              <Link
                key={index}
                className="d-flex align-items-center"
                to={link.link}
              >
                {/* <span>{link.icon}</span> */}
                <span>{link.text}</span>
              </Link>
            ))}
              <Link
                
                className="d-flex align-items-center gap-2"
                to="/"
              >
               
                <span>New</span>
                <small className={`${styles.newSpan} d-flex align-items-center justify-content-center fw-semibold`}>2</small>
              </Link>
            <Button
              className={`${styles.signOutBTN} d-flex align-items-center gap-1 rounded-pill fw-semibold`}
            >
              Log out
            </Button>

            <Image src={image} height={32} width={32} roundedCircle />
          </div>
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
