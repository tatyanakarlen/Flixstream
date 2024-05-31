import React from "react";
import styles from "./ImageOverlay.module.css";

const ImageOverlay = ({ item }) => {
  return (
    <div className={styles.imageOverlayContainer}>
      <div className={styles.imageContainer}>
        <img
          src={item.image}
        //   alt={`Image ${index}`}
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
        <div className={`${styles.textContainer} w-100 h-100 d-flex justify-content-center align-items-center`}>
          <h3>{item.title}</h3>
         
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
