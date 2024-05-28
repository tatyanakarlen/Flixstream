import React, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Carousel } from "react-bootstrap";
import styles from "./HomePageHero.module.css";

const HomePageHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const nature1 = process.env.PUBLIC_URL + "/images/nature1.jpg";
  const nature2 = process.env.PUBLIC_URL + "/images/nature2.jpg";
  const flowers = process.env.PUBLIC_URL + "/images/flowers.jpg";
  const bgImage = process.env.PUBLIC_URL + "/images/flowers.jpg";

 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${styles.homePageHeroContainer} position-relative`}>
      {/* <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div> */}
      <Carousel
        controls={false}
        indicators={false}
        fade
        activeIndex={activeIndex}
        onSelect={() => {}}
      >
        <Carousel.Item className={styles.carouselItem}>
          <div className={styles.backgroundImage}><Image src={flowers}/></div>
          <div className={styles.overlay}></div>
          <Row className={`${styles.overlayContent} p-5`}>
            <Col className="h-100">
              <div className="h-100">
                <Image src={nature1} />
              </div>
            </Col>
            <Col className="h-100 d-flex flex-column justify-content-center">
              {" "}
              <div
                className={`${styles.textContainer} d-flex flex-column w-75`}
              >
                <h2>The Art of Second Chances</h2>
                <p className="mt-3">Directed by: Sarah Bliss</p>
                <p className="mb-2">
                  Cast: Emily Jones, Billy Yates, Matthew Person, Romi McLin,
                  Thomas Elton
                </p>
                <div className="d-flex gap-5">
                  <span>2h 13min</span>
                  <span>4K UHD</span>
                  <span>4K UHD</span>
                  <span>15+</span>
                  <span>Romantic, Funny, Heartwarming</span>
                </div>
                <p className="mt-4">
                  A recently divorced gallery owner and a struggling artist find
                  themselves as neighbors in a charming apartment building. As
                  they navigate the ups and downs of their respective lives,
                  they discover that sometimes, the canvas of love can be
                  painted with second chances.
                </p>
                <div className="mt-4 d-flex gap-3">
                  <Button
                    className={`${styles.redBTN} ${styles.btn} rounded-pill fw-semibold`}
                  >
                    Play now
                  </Button>
                  <Button
                    variant="light"
                    className={`${styles.greyBTN} ${styles.btn} rounded-pill fw-semibold`}
                  >
                    Watch trailer
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className={styles.carouselItem}>
        <div className={styles.backgroundImage}><Image src={flowers}/></div>
          <div className={styles.overlay}></div>
          <Row className={`${styles.overlayContent} p-5`}>
            <Col className="h-100">
              <div className="h-100">
                <Image src={nature2} />
              </div>
            </Col>
            <Col className="h-100 d-flex flex-column justify-content-center">
              {" "}
              <div
                className={`${styles.textContainer} d-flex flex-column w-75`}
              >
                <h2>Some other title here</h2>
                <p className="mt-3">Directed by: Sarah Bliss</p>
                <p className="mb-2">
                  Cast: Emily Jones, Billy Yates, Matthew Person, Romi McLin,
                  Thomas Elton
                </p>
                <div className="d-flex gap-5">
                  <span>2h 13min</span>
                  <span>4K UHD</span>
                  <span>4K UHD</span>
                  <span>15+</span>
                  <span>Romantic, Funny, Heartwarming</span>
                </div>
                <p className="mt-4">
                  A recently divorced gallery owner and a struggling artist find
                  themselves as neighbors in a charming apartment building. As
                  they navigate the ups and downs of their respective lives,
                  they discover that sometimes, the canvas of love can be
                  painted with second chances.
                </p>
                <div className="mt-4 d-flex gap-3">
                  <Button
                    className={`${styles.redBTN} ${styles.btn} rounded-pill fw-semibold`}
                  >
                    Play now
                  </Button>
                  <Button
                    variant="light"
                    className={`${styles.greyBTN} ${styles.btn} rounded-pill fw-semibold`}
                  >
                    Watch trailer
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePageHero;
