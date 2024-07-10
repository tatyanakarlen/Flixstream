import React from 'react'
import { Col } from 'react-bootstrap'
import ImgOnclickShowsDetail from '../ImgOnclickShowsDetail/ImgOnclickShowsDetail'
import { MdPlaylistAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const BasicMovieCard = ( {movie, setMovie} ) => {
  return (
    <Col sm={12} md={6} lg={3} className="mb-5 text-light">
            <div className={`d-flex flex-column h-100`}>
              {" "}
              <ImgOnclickShowsDetail
                src={movie.image}
                onClick={() => setMovie(movie.id)}
                height="13rem"
              />
              <h5 className="mt-4 fw-semibold">{movie.title}</h5>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                  <FaEye />
                  <small>10.5k watching</small>
                </div>
                <MdPlaylistAdd className="fs-4" />
              </div>
            </div>
          </Col>
  )
}

export default BasicMovieCard
