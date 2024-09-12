import React, { useState } from "react";
import styles from "./MyList.module.css";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import PlayBTN from "../../global/components/PlayBTN/PlayBTN";
import MovieYearLength from "../../global/components/MovieYearLength/MovieYearLength";
import CustomProgress from "../../global/components/CustomProgress/CustomProgress";
import ContinueWatching from "../ContinueWatching/ContinueWatching";
import { CgPlayListRemove } from "react-icons/cg";
import { BiSolidCameraMovie } from "react-icons/bi";
import ScrollableList from "../../global/components/ScrollableList/ScrollableList";
import ImgOnclickShowsDetail from "../../global/components/ImgOnclickShowsDetail/ImgOnclickShowsDetail";
import { FaEye } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import PaginationBTN from "../../global/components/PaginationBTN/PaginationBTN";
import BasicMovieCard from "../../global/components/BasicMovieCard/BasicMovieCard";
import { isMovieOnUserList } from "../../utils/isMovieOnUserList";

const MyList = () => {
  const {
    movies,
    setMovie,
    setShowModal,
    continueWatching,
    setContinueWatching,
    fetchContinueWatching,
    userMovies,
    addToUserList,
    removeFromUserList,
  } = useOutletContext();

  const navigate = useNavigate();

  const imagePerRow = 12;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const handleLessImage = () => {
    setNext(next - imagePerRow);
  };

  const showLess = next >= movies.length;

  const grey_background =
    process.env.PUBLIC_URL + "/images/grey_background.png";

  return (
    <div className={styles.myListWrapper}>
      <h4 className="mt-4 text-light fw-semibold">My list</h4>
      <div>
        {userMovies.length === 0 ? (
          <div
            className={`${styles.cardContainer} d-flex flex-column p-4 text-light mt-3`}
          >
            <Image
              height={150}
              className={styles.placeholderImage}
              src={grey_background}
            />
            <h4 className="fw-semibold mt-3">Add to your list</h4>
            <small className="mb-1">Browse through our movie collection!</small>
            <span className={`${styles.fakeProgressBar} mt-2`}></span>
            <div className="mt-3">
              <CustomBTN
                text="Browse"
                textColor="light"
                icon={<BiSolidCameraMovie />}
                bgColor="redBTNbg"
                onClick={() => navigate("/dashboard")}
              />
            </div>
          </div>
        ) : (
          <ScrollableList>
            {userMovies.map((movie, index) => (
              <li
                key={index}
                className={`${styles.cardContainer} scrollableListCardContainer p-3 text-light`}
              >
                <ImgOnclickShowsDetail
                  src={movie.image}
                  onClick={() => setMovie(movie.id)}
                  height="11rem"
                />
                <div className="d-flex flex-column w-100 flex-grow-1 justify-content-between">
                  <div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h5 className="fw-semibold mt-3">{movie.title}</h5>
                      <div className="mt-2">
                        <PlayBTN
                          movieId={movie && movie.id}
                          movie={movie && movie}
                          setShowModal={setShowModal}
                          text="Play"
                          textColor="text-light"
                          bgColor="redBTNbg"
                          icon={true}
                          padding="smBTNPadding"
                          continueWatching={continueWatching}
                          setContinueWatching={setContinueWatching}
                          fetchContinueWatching={fetchContinueWatching}
                        />
                      </div>
                    </div>
                    <div className="w-100">
                      <MovieYearLength
                        length={movie && movie.length}
                        year={movie && movie.year}
                      />
                    </div>
                  </div>
                  <div className="w-100 mt-3">
                    <CustomProgress now={80} />
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <small className="fw-normal mb-1">
                        12m 8 s remaining
                      </small>
                      <CgPlayListRemove
                        onClick={() => removeFromUserList(movie.id)}
                        className="fs-3"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ScrollableList>
        )}
      </div>

      <h4 className="mt-4 text-light fw-semibold">Continue watching</h4>
      <div>
        {continueWatching.length === 0 ? 
          <div
          className={`${styles.cardContainer} d-flex align-items-center gap-3 p-3 text-light mt-3 flex-nowrap`}
        >
          <Image
            height={70}
            width={70}
            className={styles.placeholderImage}
            src={grey_background}
          />
          <div className="d-flex flex-column flex-grow-1">
          <h5 className="fw-semibold">Watchlist empty</h5>
         
          <span className={`${styles.fakeProgressBar} mt-2`}></span>
  
  
          </div>
        </div> : 
         <ScrollableList>
        {continueWatching.map((movie, index) => (
          <li key={index} className={`scrollableListCardContainer`}>
            <ContinueWatching
              movie={movie}
              continueWatching={continueWatching}
              setContinueWatching={setContinueWatching}
              fetchContinueWatching={fetchContinueWatching}
            />
          </li>
        ))}
      </ScrollableList> 
        
      }
      </div>
      {/* <div
        className={`${styles.cardContainer} d-flex align-items-center gap-3 p-3 text-light mt-3 flex-nowrap`}
      >
        <Image
          height={70}
          width={70}
          className={styles.placeholderImage}
          src={grey_background}
        />
        <div className="d-flex flex-column flex-grow-1">
        <h5 className="fw-semibold">Watchlist empty</h5>
       
        <span className={`${styles.fakeProgressBar} mt-2`}></span>


        </div>
      </div> */}
    
      <h4 className="mt-3 text-light fw-semibold">Recommended</h4>
      <Row className="mt-4 pe-3">
        {movies?.slice(0, next)?.map((movie, index) => {
          const onList = isMovieOnUserList(userMovies, movie.id);
          return (
            <BasicMovieCard
              height="13rem"
              key={index}
              movie={movie}
              setMovie={setMovie}
              addToUserList={addToUserList}
              removeFromUserList={removeFromUserList}
              onList={onList}
              continueWatching={continueWatching}
              setContinueWatching={setContinueWatching}
              fetchContinueWatching={fetchContinueWatching}
            />
          );
        })}
      </Row>

      {/* <Row className="mt-4 pe-3">
        {movies?.slice(0, next)?.map((movie, index) => (
          <BasicMovieCard height="13rem" key={index} movie={movie} setMovie={setMovie} />
        ))}
      </Row> */}
      <div className="d-flex w-100 justify-content-center">
        <PaginationBTN
          onClick={showLess ? handleLessImage : handleMoreImage}
          text={showLess ? "See less" : "Load more"}
        />
      </div>
    </div>
  );
};

export default MyList;
