import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IoPlaySharp } from "react-icons/io5";
import styles from "./PlayBTN.module.css";

const PlayBTN = ({
  text,
  icon,
  textColor,
  padding, 
  variant,
  setShowModal,
  movieId,
  movie,
}) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(`/dashboard/play/${movie && movieId}`);
        setShowModal && setShowModal(false);
      }}
      variant={variant}
      className={`${padding} ${styles.btn} ${textColor} d-flex align-items-center justify-content-center gap-2 rounded`}
    >
      {icon && <IoPlaySharp />}

      {text}
    </Button>
  );
};

export default PlayBTN;
