import React, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Carousel } from "react-bootstrap";
import styles from "./HomePageHero.module.css";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";

const HomePageHero = ( {setShowModal} ) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nature1 = process.env.PUBLIC_URL + "/images/nature1.jpg";
  const nature2 = process.env.PUBLIC_URL + "/images/nature2.jpg";
  const nature3 = process.env.PUBLIC_URL + "/images/nature3.jpg";
  const flowers = process.env.PUBLIC_URL + "/images/flowers.jpg";

  const data = [
    {
      id: "17",
      image: nature1,
      headline: "The Art of Second Chances",
      directedBy: "Directed by: Sarah Bliss",
      cast: "Cast: Emily Jones, Billy Yates, Matthew Person, Romi McLin,Thomas Elton",
      specs: ["2h 13min", "4K UHD", "15+", "Romantic, Funny, Heartwarming"],
      description:
        "A recently divorced gallery owner and a struggling artist find themselves as neighbors in a charming apartment building. As they navigate the ups and downs of their respective lives, they discover that sometimes, the canvas of love can be painted with second chances.",
    },
    {
      id: "18",
      image: nature2,
      headline: "A Journey Through Time",
      directedBy: "Directed by: John Smith",
      cast: "Cast: Amanda White, James Brown, Lucy Green, Robert Blue, Sarah Black",
      specs: ["1h 45min", "4K UHD", "12+", "Adventure, Inspiring, Dramatic"],
      description:
        "A renowned historian and a young journalist embark on a thrilling adventure through ancient ruins. As they unravel hidden secrets and face unexpected dangers, they discover that the past holds the key to their future.",
    },
    {
      id: "19",
      image: nature3,
      headline: "Echoes of the Forgotten",
      directedBy: "Directed by: Emily Clark",
      cast: "Cast: Olivia Adams, Michael Brown, Sophia Davis, Liam Johnson, Ava Wilson",
      specs: ["2h 5min", "4K UHD", "16+", "Thriller, Mysterious, Suspenseful"],
      description:
        "In a small town shrouded in mystery, a detective and a local librarian join forces to uncover the truth behind a series of unexplained disappearances. As they delve deeper into the town's dark history, they realize that some secrets are better left buried.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${styles.homePageHeroContainer} position-relative mt-4`}>
      <Carousel
        controls={false}
        indicators={false}
        fade
        activeIndex={activeIndex}
        onSelect={() => {}}
      >
        {data.map((movie, index) => (
          <Carousel.Item key={index} className={`${styles.carouselItem}`}>
            <div className={styles.backgroundImage}>
              <Image src={flowers} />
            </div>
            <div className={styles.overlay}></div>
            <Row className={`${styles.overlayContent} p-4`}>
              <Col className="h-100">
                <div className="h-100">
                  <Image src={movie.image} />
                </div>
              </Col>
              <Col className="h-100 d-flex flex-column justify-content-center">
                {" "}
                <div
                  className={`${styles.textContainer} d-flex flex-column`}
                >
                  <h2>{movie.headline}</h2>
                  <p className="mt-3">{movie.directedBy}</p>
                  <p className="mb-2">{movie.cast}</p>
                  {/* <div className="d-flex gap-5">
                    {movie.specs.map((spec, index) => (
                      <span key={index}>{spec}</span>
                    ))}
                  </div> */}
                  <p className="mt-4">{movie.description}</p>
                  <div className="mt-4 d-flex gap-3">
                    <PlayBTN
                      text="Watch now"
                      movieId={movie && movie.id}
                      movie={movie && movie}
                      setShowModal={setShowModal}
                      icon={true}
                      textColor="text-light"
                      bgColor="redBTNbg"

                    />
                    <PlayBTN
                      text="Watch trailer"
                      textColor="greyBTNText"
                      variant="light"
                      icon={false}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePageHero;
