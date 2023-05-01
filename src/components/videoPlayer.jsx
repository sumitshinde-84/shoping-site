import React, { useRef, useState, useEffect } from 'react';

import './style/VedeoPlayer.css'; // Import the CSS file for styling


const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.addEventListener('click', handleVideoClick);
    return () => {
      videoRef.current.removeEventListener('click', handleVideoClick);
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video-player-container">

      <video ref={videoRef} src={video} className="custom-video-player" />

    </div>
  );
};

export default VideoPlayer;
