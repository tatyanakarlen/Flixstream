import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ tag }) => {
  return (
    <small className={`${styles.tag} rounded-pill py-1 px-4 fw-semibold`}>
      #{tag}
    </small>
  );
};

export default Tag;
