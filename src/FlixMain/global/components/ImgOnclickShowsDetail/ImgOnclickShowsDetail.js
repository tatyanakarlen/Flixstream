import React from "react";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { Image } from "react-bootstrap";
import styles from "./ImgOnclickShowsDetail.module.css";

const ImgOnclickShowsDetail = ({ onClick, src, height }) => {
  return (
    <div className={`${styles.imgContainer}`} style={{ height: height }}>
      <Image fluid src={src} className="w-100 mt-1" />
      <div onClick={onClick} className={styles.detailsIconDiv}>
        <MdOutlinePlaylistPlay />
      </div>
    </div>
  );
};

export default ImgOnclickShowsDetail;
