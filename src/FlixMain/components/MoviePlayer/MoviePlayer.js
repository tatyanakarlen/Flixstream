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

const MoviePlayer = () => {
  const { movieId } = useParams();

  const { playMovie, moviePlayed } = useOutletContext();
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hasUserPressedPlay, setHasUserPressedPlay] = useState(false);

  useEffect(() => {
    playMovie(movieId);
  }, []);

  const videoRef = useRef();
  const progressBarRef = useRef();
  const [progress, setProgress] = useState(0);

  const calculateCirclePosition = () => {
    const progressBarWidth = progressBarRef.current.clientWidth;
    const circlePosition = (progress / 100) * progressBarWidth;
    return circlePosition;
  };

  useEffect(() => {
    // Calculate the initial position of the circle span
    const initialCirclePosition = calculateCirclePosition();

    // Update the style of the circle span
    const circleSpan = progressBarRef.current.querySelector(".circle-span");
    if (circleSpan) {
      circleSpan.style.left = `${initialCirclePosition}px`;
    }
  }, []);

  const handlePlayVideo = () => {
    setTimeout(() => {
      setHasUserPressedPlay(true);
      setControlsVisible(false);
    }, 3000);

    videoRef.current.play();

    setTimeout(() => {
      setHasUserPressedPlay(false);
    }, 4000);
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
      className={`${styles.videoContainer} w-100 h-100 position-relative overflow-hidden`}
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
        <div className={`${styles.progressBarContainer} mt-4`}>
          <ProgressBar
            ref={progressBarRef}
            className={styles.customProgress}
            now={progress}
          />
        </div>
        <div className="d-flex justify-content-between text-light mt-2">
          <small className="text-light mt-1">Now playing</small>
          <small className="text-light mt-1">Next up</small>
        </div>

        {/* import { IoMdPause } from "react-icons/io";
import { IoIosRewind } from "react-icons/io";
import { IoPlaySharp } from "react-icons/io5";
import { IoMdFastforward } from "react-icons/io";
import { IoStopSharp } from "react-icons/io5"; */}
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
