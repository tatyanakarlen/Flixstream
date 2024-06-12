import React, { useRef, useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import "../../../index.css";
import { ProgressBar } from "react-bootstrap";

const MoviePlayer = () => {
  const { movieId } = useParams();
  const { playMovie, moviePlayed } = useOutletContext();

  const videoRef = useRef();
  const [progress, setProgress] = useState(0);
  const handlePlayVideo = () => videoRef.current.play();

  const handleTimeUpdate = (e) => {
    if (isNaN(e.target.duration)) return;
    setProgress((e.target.currentTime / e.target.duration) * 100);
  };

  useEffect(() => {
    if (movieId) {
      playMovie(movieId);
    }
  }, [movieId]); 

//   useEffect(() => {
//     console.log(progress, 'progress')
//   }, [progress])

  const videoSrc = process.env.PUBLIC_URL + "/videos/testVideo.mp4";

  return (
    <div>
      <button onClick={handlePlayVideo}>Play video</button>

      <video
        controls
        onTimeUpdate={handleTimeUpdate}
        src={videoSrc}
        width="400"
        height="500"
        ref={videoRef}
      />

      {/* <progress id="progress" max="100" value={progress}>
        Progress
      </progress> */}
      <ProgressBar now={progress} />;
    </div>
  );
};

export default MoviePlayer;
