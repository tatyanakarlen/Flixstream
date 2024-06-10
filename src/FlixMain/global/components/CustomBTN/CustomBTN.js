import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBTN.module.css";

const CustomBTN = ({ link, onClick, text, bgColor, textColor, variant, icon }) => {
  return (
    <Button
      variant={variant}
      className={`${styles.btn} ${bgColor} ${textColor} d-flex align-items-center justify-content-center gap-2 rounded`}
    >
      {icon && icon}

      {text}
    </Button>
  );
};

export default CustomBTN;
