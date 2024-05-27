import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import styles from "./HomePageHero.module.css";

const nature1 = process.env.PUBLIC_URL + "/images/nature1.jpg";
const nature2 = process.env.PUBLIC_URL + "/images/nature2.jpg";

const HomePageHero = () => {
  return (
    <div className={`${styles.homePageHeroContainer} position-relative p-5`}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>
      <Row className={`${styles.overlayContent}`}>
        <Col className="h-100">
          <div className="h-100">
            <Image src={nature1} />
          </div>
        </Col>
        <Col className="h-100">
          {" "}
          <div className="h-100">
            some stuff here some more stuff some more stuff
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePageHero;
