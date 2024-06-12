import React, { useRef, useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import "../../../index.css";
import styles from "./MoviePlayer.module.css";
import { ProgressBar } from "react-bootstrap";

const MoviePlayer = () => {
  const { movieId } = useParams();
  const { playMovie, moviePlayed } = useOutletContext();
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hasUserPressedPlay, setHasUserPressedPlay] = useState(false);

  const videoRef = useRef();
  const [progress, setProgress] = useState(0);
  const handlePlayVideo = () => {
    setHasUserPressedPlay(true);
    setControlsVisible(false);
    videoRef.current.play();
    
    setTimeout(() => {
      setHasUserPressedPlay(false);
    }, 2000); // Hide controls for 3 seconds
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

  useEffect(() => {
    if (movieId) {
      playMovie(movieId);
    }
  }, [movieId]);

  const videoSrc = process.env.PUBLIC_URL + "/videos/testVideo.mp4";

  return (
    <div
      className={`${styles.videoContainer} w-100 h-100 position-relative`}
      onMouseEnter={() => !hasUserPressedPlay && setControlsVisible(true)}
      onMouseLeave={() => !videoRef.current.paused && setControlsVisible(false)}
    >
      {/* <button onClick={handlePlayVideo}>Play video</button> */}

      <video
        // controls
        onTimeUpdate={handleTimeUpdate}
        src={videoSrc}
        width="100%"
        height="100%"
        ref={videoRef}
      />
      {controlsVisible && (
        <div
          className={`${styles.controlsOverlay} ${
            controlsVisible ? "" : styles.controlsOverlayHidden
          }`}
        >
          <button onClick={handlePlayVideo}>Play</button>
          <button onClick={handlePauseVideo}>Pause</button>
          <button onClick={handleStopVideo}>Stop</button>
          <button onClick={handleRewindVideo}>Rewind 10s</button>
          <button onClick={handleFastForwardVideo}>Fast Forward 10s</button>
          <ProgressBar now={progress} />
        </div>
      )}

      {/* <ProgressBar now={progress} />; */}
    </div>
  );
};

export default MoviePlayer;
