import React from "react";
import { Button } from "react-bootstrap";
import styles from './PaginationBTN.module.css'

const PaginationBTN = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="light"
      className={`${styles.btn} rounded-pill fw-semibold align-self-center mt-4`}
    >
      {text}
    </Button>
  );
};

export default PaginationBTN;
