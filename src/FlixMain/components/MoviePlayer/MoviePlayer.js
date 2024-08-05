import React, { useRef, useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import "../../../index.css";
import styles from "./MoviePlayer.module.css";
import { ProgressBar } from "react-bootstrap";
import { CgScreen } from "react-icons/cg";
import { AiFillSound } from "react-icons/ai";
import { MdArrowCircleLeft } from "react-icons/md";
import { RiSoundModuleFill } from "react-icons/ri";
import { CgLoadbarSound } from "react-icons/cg";
import { IoMdPause } from "react-icons/io";
import { IoIosRewind } from "react-icons/io";
import { IoPlaySharp } from "react-icons/io5";
import { IoMdFastforward } from "react-icons/io";
import { IoStopSharp } from "react-icons/io5";

const MoviePlayer = ({ playMovie, moviePlayed }) => {
  const { movieId } = useParams();
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hasUserPressedPlay, setHasUserPressedPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef();
  const progressBarRef = useRef();
  const progressCircleRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    playMovie(movieId);
  }, []);

  useEffect(() => {
    const progressCircle = document.createElement("span");
    progressCircle.classList.add(styles.progressCircle);
    progressCircleRef.current = progressCircle;
    const progressBar = progressBarRef.current;

    if (progressBar) {
      const progressBarElement = progressBar.querySelector(".progress-bar");
      if (progressBarElement) {
        progressBarElement.appendChild(progressCircle);
      }

      progressCircle.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      progressCircle.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      if (progressBarRef.current) {
        const progressBarElement =
          progressBarRef.current.querySelector(".progress-bar");
        if (progressBarElement && progressCircleRef.current) {
          progressBarElement.removeChild(progressCircleRef.current);
        }
      }
    };
  }, [progress]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    updateProgress(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateProgress(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const updateProgress = (e) => {
    const progressBarWidth = progressBarRef.current.clientWidth;
    const offsetX =
      e.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newProgress = (offsetX / progressBarWidth) * 100;
    setProgress(Math.min(100, Math.max(0, newProgress)));

    if (videoRef.current) {
      videoRef.current.currentTime =
        (videoRef.current.duration * newProgress) / 100;
    }
  };

  const handlePlayVideo = () => {
    setTimeout(() => {
      setHasUserPressedPlay(true);
      setControlsVisible(false);
    }, 4000);

    videoRef.current.play();

    setTimeout(() => {
      setHasUserPressedPlay(false);
    }, 5000);
  };
  const handlePauseVideo = () => videoRef.current.pause();

  const handleStopVideo = () => {
    // setHasUserPressedPlay(false)
    setControlsVisible(true);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setProgress(0);
  };

  const handleRewindVideo = () => {
    videoRef.current.currentTime = Math.max(
      0,
      videoRef.current.currentTime - 10
    ); // Rewind by 10 seconds
  };

  const handleFastForwardVideo = () => {
    videoRef.current.currentTime = Math.min(
      videoRef.current.duration,
      videoRef.current.currentTime + 10
    ); // Fast forward by 10 seconds
  };

  const handleTimeUpdate = (e) => {
    if (isNaN(e.target.duration)) return;
    setProgress((e.target.currentTime / e.target.duration) * 100);
  };

  const videoSrc = process.env.PUBLIC_URL + "/videos/testVideo.mp4";

  return (
    <div
      className={`${styles.videoContainer} w-100 position-relative overflow-hidden`}
      onMouseEnter={() => !hasUserPressedPlay && setControlsVisible(true)}
      onMouseLeave={() => !videoRef.current.paused && setControlsVisible(false)}
    >
      <video
        // controls
        onTimeUpdate={handleTimeUpdate}
        src={videoSrc}
        width="100%"
        height="100%"
        ref={videoRef}
      />

      <div
        className={`${styles.titleOverlay} ${
          controlsVisible ? styles.titleVisible : styles.titleHidden
        } p-4 d-flex justify-content-between align-items-center`}
      >
        <div className="d-flex gap-3 align-items-center text-light">
          <span>
            {" "}
            <MdArrowCircleLeft className="fs-5" />
          </span>
          <span>{moviePlayed && moviePlayed.title}</span>
        </div>
        <div className="d-flex gap-3 fs-5 align-items-center">
          <CgScreen />
          <CgLoadbarSound className="fs-3" />
        </div>
      </div>

      <div
        className={`${styles.controlsOverlay} ${
          controlsVisible ? styles.controlsVisible : styles.controlsHidden
        } p-4 text-light`}
      >
        <h3>{moviePlayed && moviePlayed.title}</h3>
        <div
          ref={progressBarRef}
          onMouseDown={handleMouseDown}
          className={`${styles.progressBarContainer} mt-4`}
        >
          <ProgressBar
            ref={progressBarRef}
            className={styles.customProgress}
            now={progress}
          />
        </div>
        <div className="d-flex justify-content-between text-light mt-2">
          <small className="text-light">Now playing</small>
          <small className="text-light">Next up</small>
        </div>

        <div className="d-flex justify-content-center align-items-center text-light gap-5 fs-3">
          <IoMdPause onClick={handlePauseVideo} />
          <IoIosRewind onClick={handleRewindVideo} />
          <span
            className={`${styles.playBTN} d-flex justify-content-center align-items-center bg-light`}
          >
            <IoPlaySharp className="text-dark ms-1" onClick={handlePlayVideo} />
          </span>
          <IoMdFastforward onClick={handleFastForwardVideo} />
          <IoStopSharp onClick={handleStopVideo} />
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;
