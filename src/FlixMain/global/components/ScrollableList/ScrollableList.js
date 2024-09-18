import React from "react";
import styles from "./ScrollableList.module.css";

const ScrollableList = ({ children }) => {
  return (
    <div
      role="region"
      aria-labelledby="scrollable-list-title"
      tabIndex="0"
      className={`${styles.listContainer} mt-2`}
    >
        <h2 id="scrollable-list-title" className="visually-hidden">
        Scrollable List
      </h2>
      <ul role="list" className={`${styles.list}`}>{children}</ul>
    </div>
  );
};

export default ScrollableList;
