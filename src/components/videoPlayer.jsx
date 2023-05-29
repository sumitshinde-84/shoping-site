import React, { useRef, useEffect } from "react";

import "./style/VedeoPlayer.css"; 

const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoClick = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
      } else if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("click", handleVideoClick);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("click", handleVideoClick);
      }
    };
  }, []);

  return (
    <div className="video-player-container">
      <video ref={videoRef} src={video} className="custom-video-player" />
    </div>
  );
};

export default VideoPlayer;
