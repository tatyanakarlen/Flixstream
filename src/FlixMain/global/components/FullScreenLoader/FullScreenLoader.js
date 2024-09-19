import React from "react";
import Loader from "../../../components/HomePageHero/Loader/Loader";
import styles from "./FullScreenLoader.module.css";

const FullScreenLoader = () => {
  return (
    <div
      className={`${styles.loaderDivContainer} h-100 d-flex flex-column justify-content-center align-items-center`}
    >
      <Loader />
    </div>
  );
};

export default FullScreenLoader;
