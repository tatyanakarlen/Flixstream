import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBTN.module.css";

const CustomBTN = ({ link, click, text, icon, bgColor, textColor, variant }) => {
  return (
    <Button
      variant={variant}
      className={`${styles.btn} ${bgColor} ${textColor} d-flex align-items-center justify-content-center gap-2 w-100`}
    >
      {text}
    </Button>
  );
};

export default CustomBTN;
