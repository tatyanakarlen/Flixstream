import React from "react";
import { Col } from "react-bootstrap";
import ImgOnclickShowsDetail from "../ImgOnclickShowsDetail/ImgOnclickShowsDetail";
import { MdPlaylistAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const BasicMovieCard = ({ movie, setMovie, height }) => {
  return (
    <Col xs={12} md={6} lg={3} className="mb-5 text-light">
      <div className={`d-flex flex-column h-100`}>
        {" "}
        <ImgOnclickShowsDetail
          src={movie.image}
          onClick={() => setMovie(movie.id)}
          height={height}
        />
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <h5 className="fw-semibold mb-0">{movie.title}</h5>
          <MdPlaylistAdd className="fs-4" />
        </div>
        <div className="mt-1 d-flex gap-2 align-items-center">
          <FaEye />
          <small>10.5k watching</small>
        </div>
      </div>
    </Col>
  );
};

export default BasicMovieCard;
