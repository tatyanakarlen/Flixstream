import React from "react";
import { Col } from "react-bootstrap";
import ImgOnclickShowsDetail from "../ImgOnclickShowsDetail/ImgOnclickShowsDetail";
import { MdPlaylistAdd } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";
import PlayBTN from "../PlayBTN/PlayBTN";

const BasicMovieCard = ({
  movie,
  setMovie,
  height,
  setShowModal,
  addToUserList,
  removeFromUserList,
  onList,
  continueWatching,
  setContinueWatching,
  fetchContinueWatching, 
}) => {
  const handleAddOrRemove = () => {
    if (onList) {
      removeFromUserList(movie.id);
    } else {
      addToUserList(movie.id);
    }
  };
  return (
    <Col xs={12} md={6} lg={4} className="mb-5 text-light">
      <div className={`d-flex flex-column h-100`}>
        {" "}
        <ImgOnclickShowsDetail
          src={movie.image}
          onClick={() => setMovie(movie.id)}
          height={height}
        />
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <h5 className="fw-semibold mb-0">{movie.title}</h5>
          <div className="d-flex align-items-center gap-2">
            <PlayBTN
              movieId={movie && movie.id}
              movie={movie && movie}
              padding="px-3"
              icon={<IoPlaySharp className="fs-5" />}
              setShowModal={setShowModal}
              continueWatching={continueWatching}
              setContinueWatching={setContinueWatching}
              fetchContinueWatching={fetchContinueWatching}
            />
            {onList ? (
              <CgPlayListRemove
                onClick={handleAddOrRemove}
                className="fs-3"
                role="button"
                title="Remove from list"
              />
            ) : (
              <MdPlaylistAdd
                onClick={handleAddOrRemove}
                className="fs-3"
                role="button"
                title="Add to list"
              />
            )}
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
