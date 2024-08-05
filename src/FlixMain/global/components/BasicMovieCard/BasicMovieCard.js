import React from "react";
import { Col } from "react-bootstrap";
import ImgOnclickShowsDetail from "../ImgOnclickShowsDetail/ImgOnclickShowsDetail";
import { MdPlaylistAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";
import PlayBTN from "../PlayBTN/PlayBTN";

const BasicMovieCard = ({ movie, setMovie, height, setShowModal }) => {
  return (
    <Col xs={12} md={6} lg={3} className="mb-5 text-light">
      <div className={`d-flex flex-column h-100`}>
        {" "}
        <ImgOnclickShowsDetail
          src={movie.image}
          onClick={() => setMovie(movie.id)}
          height={height}
        />
        {/* movieId={movie && movie.id}
              movie={movie && movie}
              setShowModal={setShowModal}
              text="Play"
              textColor="text-light"
              bgColor="redBTNbg"
              icon={true}
              padding="lgBTNPadding" */}
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <h5 className="fw-semibold mb-0">{movie.title}</h5>
          <div className="d-flex align-items-center gap-2">
            {/* <IoPlaySharp className="fs-5" /> */}
            <PlayBTN
              movieId={movie && movie.id}
              movie={movie && movie}
              padding="px-3"
              icon={<IoPlaySharp className="fs-5" />}
              setShowModal={setShowModal}
            />
            <MdPlaylistAdd className="fs-4" />
          </div>
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
