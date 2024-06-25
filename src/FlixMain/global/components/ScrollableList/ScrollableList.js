import React from "react";
import styles from "./ScrollableList.module.css";

const ScrollableList = ({ children }) => {
  return (
    <div className={`${styles.listContainer} mt-2`}>
      <ul className={`${styles.list}`}>{children}</ul>
    </div>
  );
};

export default ScrollableList;
