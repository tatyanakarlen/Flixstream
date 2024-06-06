import React, { useState, useEffect } from "react";
import { Modal, Image, Button } from "react-bootstrap";
import MovieYearLength from "../MovieYearLength/MovieYearLength";
import styles from "./DetailsModal.module.css";
import CustomBTN from "../CustomBTN/CustomBTN";
import { IoPlaySharp } from "react-icons/io5";
import Actions from "../Actions/Actions";
import Tag from "../Tag/Tag";

const DetailsModal = ({
  showModal,
  setShowModal,
  selectedMovie,
  allMovies,
}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movie = allMovies.find((movie) => movie.id === selectedMovie);
    setMovie(movie);
  });

  return (
    <Modal
      centered
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      dialogClassName={styles.modal}
    >
      <Image src={movie && movie.image}></Image>
      <div className="d-flex justify-content-between gap-3">
        <div
          className={`${styles.leftSideContentDiv} text-light py-3 d-flex flex-column align-items-start`}
        >
          <h4 className="mt-1">{movie && movie.title}</h4>
          <MovieYearLength
            length={movie && movie.length}
            year={movie && movie.year}
          />
          <div className="mt-3">
            <Button className={`${styles.btn} d-flex align-items-center justify-content-center gap-2 rounded-pill`}>
              <IoPlaySharp />
              Play
            </Button>
         
          </div>
          <p className="mt-4">{movie && movie.longDescription}</p>
          <Actions />
          <div className="d-flex mt-4 gap-2">
            {movie && movie.tags.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="d-flex flex-column">
            <small></small>
            {movie && movie.cast.map((castMember, index) => (
                <small>{castMember}</small>
               

            ))}
           
            

        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
