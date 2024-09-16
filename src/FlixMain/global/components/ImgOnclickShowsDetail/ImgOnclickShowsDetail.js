import React from "react";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { Image } from "react-bootstrap";
import styles from "./ImgOnclickShowsDetail.module.css";

const ImgOnclickShowsDetail = ({ onClick, src }) => {
  return (
    <div className={`${styles.imgContainer}`}>
      <Image fluid src={src} className="w-100" />
      <div onClick={onClick} className={styles.detailsIconDiv}>
        <MdOutlinePlaylistPlay />
      </div>
    </div>
  );
};

export default ImgOnclickShowsDetail;
