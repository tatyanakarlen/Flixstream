import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./PlayBTN.module.css";

const CustomBTN = ({
  link,
  click,
  text,
  bgColor,
  textColor,
  variant,
  icon,
  setShowModal,
  movieId,
  movie,
}) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(`/flixStream/play/${movie && movieId}`);
        setShowModal(false);
      }}
      variant={variant}
      className={`${styles.btn} ${bgColor} ${textColor} d-flex align-items-center justify-content-center gap-2 rounded`}
    >
      {icon && icon}

      {text}
    </Button>
  );
};

export default CustomBTN;
