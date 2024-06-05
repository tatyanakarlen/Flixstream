import React, { useState, useEffect } from "react";
import { Modal, Image } from "react-bootstrap";
import styles from './DetailsModal.module.css'

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
    console.log(movie);
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
      <Modal.Header className={styles.modalHeader} closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>some content here</Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
