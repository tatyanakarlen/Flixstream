import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBTN.module.css";

const CustomBTN = ({
  link,
  onClick,
  text,
  icon,
  bgColor,
  textColor,
  variant,
  padding,
  width

}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={`${styles.btn} ${bgColor} ${textColor} ${padding} ${width} text-nowrap d-flex align-items-center justify-content-center gap-2`}
    >
      {icon && icon}
      {text}
    </Button>
  );
};

export default CustomBTN;
