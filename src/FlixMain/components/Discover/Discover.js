import React from "react";
import { Button, Image, Row, Col } from "react-bootstrap";
import styles from "./Discover.module.css";
import { FaChevronRight } from "react-icons/fa";
import ImageOverlay from "../../global/components/ImageOverlay/ImageOverlay";

const Discover = () => {
  const nature1 = process.env.PUBLIC_URL + "/images/nature1.jpg";
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const history = [
    {
      id: "1",
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "1985",
      length: "1 hr 26 min",
      likes: "5",
      tags: ["topRated", "trending"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "2",
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2010",
      length: "1 hr 15 min",
      likes: "20",
      tags: ["topRated", "recentlyAdded"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "3",
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2024",
      length: "1 hr 24 min",
      likes: "72",
      tags: ["mustWatch"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "4",
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2016",
      length: "1 hr 10 min",
      likes: "25",
      tags: ["mustWatch", "recentlyAdded"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "5",
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2020",
      length: "1 hr 25 min",
      likes: "12",
      tags: ["topRated", "mustWatch"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
    {
      id: "6",
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      longDescription:
        "In the bustling city of San Francisco, young artist Maya finds herself entangled in an unexpected adventure when she discovers a mysterious, ancient artifact hidden within the walls of her loft.",
      year: "2023",
      length: "1 hr 10 min",
      likes: "19",
      tags: ["justForYou"],
      cast: [
        "Emma Hartley",
        "Jonathan Pierce",
        "Olivia Mason",
        "Marcus Bradley",
      ],
      creator: "Andy Breckman",
      genres: ["Adventure", "Mystery", "Thriller"],
    },
  ];

  const recommended = [
    {
      image: nature1,
      title: "Action & Adventure",
    },
    {
      image: nature1,
      title: "Sci-Fi & Fantasy",
    },
    {
      image: nature1,
      title: "Comedy Shows",
    },
    {
      image: nature1,
      title: "Drama Series",
    },
    {
      image: nature1,
      title: "Documentaries",
    },
    {
      image: nature1,
      title: "Crime & Mystery",
    },
    {
      image: nature1,
      title: "Animated Series",
    },
    {
      image: nature1,
      title: "Romantic Movies",
    },
  ];
  return (
    <div className="pe-3">
      <div className="d-flex w-100 justify-content-between mt-4">
        <h4 className="text-light">Explore titles</h4>
        <Button className={`${styles.clearHistoryBTN} rounded`}>
          Clear history
        </Button>
      </div>
      <div className="d-flex flex-column mt-4 gap-4">
        {history.map((movie, index) => (
          <div
            role="button"
            key={index}
            className={`${styles.movieTitle} d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex gap-3 align-items-center">
              <Image
                roundedCircle
                fluid
                width={50}
                height={50}
                src={movie.image}
                className={styles.historyIMG}
              />
              <div className="d-flex flex-column">
                <span className="text-light fs-6 fw-semibold">
                  {movie.title}
                </span>
                <small>{movie.year}</small>
              </div>
            </div>

            <FaChevronRight className="text-light me-2 fs-5" />
          </div>
        ))}
      </div>
      <div className="text-light mt-5">
        <h5>Recommended for you</h5>
        <Row className="mt-4">
          {recommended.map((movie, index) => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={index}>
              <div>
                <ImageOverlay item={movie} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Discover;
