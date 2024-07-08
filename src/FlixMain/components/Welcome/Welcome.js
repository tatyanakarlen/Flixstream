import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { TbMovie } from "react-icons/tb";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className="text-light py-2 px-4">
      <Navbar className="justify-content-between" expand="lg">
        <Navbar.Brand
          className="d-flex align-items-center gap-2 fw-semibold"
          href="/"
        >
          <TbMovie />
          FlixStream
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-3">
              <CustomBTN
                text="Register"
                textColor="text-dark fw-semibold"
                variant="light"
                icon={false}
                padding="px-4"
              />
              <Nav.Link className={`${styles.link} text-nowrap fw-semibold`} href="#link">Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="d-flex justify-content-center align-items-center">
      <h1 className="fw-semibold">Welcome to FlixStream</h1>
      </div>
    </div>
  );
};

export default Welcome;
