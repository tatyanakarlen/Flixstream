import React from "react";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { Image } from "react-bootstrap";
import styles from "./ImgOnclickShowsDetail.module.css";

const ImgOnclickShowsDetail = ({ alt, onClick, src }) => {
  return (
    <div className={`${styles.imgContainer}`}>
      <Image alt={alt} fluid src={src} className="w-100" />
      <div onClick={onClick} className={styles.detailsIconDiv}>
        <MdOutlinePlaylistPlay />
      </div>
    </div>
  );
};

export default ImgOnclickShowsDetail;
