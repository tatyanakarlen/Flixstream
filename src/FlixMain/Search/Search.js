import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import styles from "./Search.module.css";
import { useOutletContext } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const nature1 = process.env.PUBLIC_URL + "/images/nature1.jpg";

const Search = () => {
  const [search, setSearchMode] = useOutletContext();

  useEffect(() => {
    setSearchMode(true);
  }, []);

  const data = [
    {
      image: nature1,
      title: "Thriller",
      genre: "Action",
    },
    {
      image: nature1,
      title: "Sci-Fi adventure",
      genre: "Horror",
    },
    {
      image: nature1,
      title: "Mystery thriller",
      genre: "Documentary",
    },
    {
      image: nature1,
      title: "Romantic comedy",
      genre: "Comedy",
    },
    {
      image: nature1,
      title: "Sci-Fi fantasy",
      genre: "Stand-up special",
    },
  ];

  return (
    <div className="blackContainer h-100 px-5 py-4">
      <div className="d-flex w-100 justify-content-between">
        <h4 className="text-light">Explore titles</h4>
        <Button className={`${styles.clearHistoryBTN} rounded-pill`}>
          Clear history
        </Button>
      </div>
      <div className="d-flex flex-column mt-4 gap-4">
        {data.map((movie, index) => (
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3">
              <Image
                roundedCircle
                fluid
                width={45}
                height={45}
                src={movie.image}
              />
              <div className="d-flex flex-column">
                <span className="text-light fs-6 fw-semibold">{movie.title}</span>
                <small>{movie.genre}</small>
              </div>
            </div>
            <FaChevronRight className="text-light me-2"/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
