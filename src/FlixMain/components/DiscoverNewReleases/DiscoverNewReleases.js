import React, { useState, useEffect } from "react";
import styles from "./DiscoverNewReleases.module.css";
import { Row, Col, Image, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const DiscoverNewReleases = () => {
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const data = [
    {
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      likes: "5",
    },
    {
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      likes: "20",
    },
    {
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      likes: "72",
    },
    {
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      likes: "25",
    },
    {
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      likes: "12",
    },
    {
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      likes: "19",
    },
    {
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      likes: "8",
    },
    {
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      likes: "3",
    },
    {
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      likes: "5",
    },
    {
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      likes: "20",
    },
    {
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      likes: "72",
    },
    {
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      likes: "25",
    },
    {
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      likes: "12",
    },
    {
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      likes: "19",
    },
    {
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      likes: "8",
    },
    {
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      likes: "3",
    },
  ];
  const tags = ["All", "Watched", "Saved", "Recommended", "History"];

  const imagePerRow = 8;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  useEffect(() => {
    console.log(next, "next");
  }, [next]);

  return (
    <div className={`${styles.container} p-5 d-flex flex-column`}>
      <h4 className="text-light fw-semibold">Discover New Releases</h4>
      <div className={`${styles.tagsContainer} d-flex gap-2 mt-4`}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-dark text-light rounded-pill py-1 px-4"
          >
            {tag}
          </span>
        ))}
      </div>
      <Row className="mt-5">
        {data?.slice(0, next)?.map((movie, index) => (
          <Col
            key={index}
            sm={12}
            lg={4}
            xl={3}
            className="mb-4 text-light d-flex flex-column"
          >
            <div
              className={`${styles.cardContainer} px-3 pt-2 pb-3 d-flex flex-column flex-grow-1`}
            >
              <BsThreeDots
                role="button"
                className={`${styles.icon} align-self-end fs-1`}
              />
              <Image fluid src={movie.image} className="w-100 mt-1" />
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h5 className="fw-semibold mt-4">{movie.title}</h5>
                  <small className="pe-4">{movie.description}</small>
                </div>

                <small
                  className={`${styles.likeSpan} mt-3 rounded-pill py-1 px-3 d-flex align-items-center gap-2 text-light align-self-end`}
                >
                  <FaHeart />
                  {movie.likes}
                </small>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Button
        onClick={next === data.length ? handleLessImage : handleMoreImage}
        variant="light"
        className={`${styles.btn} rounded-pill fw-semibold align-self-center mt-4`}
      >
        {next === data.length ? "See less" : "Load more"}
      </Button>
    </div>
  );
};

export default DiscoverNewReleases;
