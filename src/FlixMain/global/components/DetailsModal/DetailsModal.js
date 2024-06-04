import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

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
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
