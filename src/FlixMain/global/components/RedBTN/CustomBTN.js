import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBTN.module.css";

const CustomBTN = ({ link, onClick, text, bgColor, textColor, variant }) => {
  return (
    <Button
      variant={variant}
      className={`${styles.redBTN} ${styles.btn} ${bgColor} ${textColor} rounded-pill fw-semibold`}
    >
      {text}
    </Button>
  );
};

export default CustomBTN;
