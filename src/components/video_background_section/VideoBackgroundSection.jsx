import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import './VideoBackgroundSection.css';
import HelloWorld from '../hello_world/HelloWorld';

export default function VideoBackgroundSection() {
    const playerRef = useRef(null);

    const handleProgress = (state) => {
    if (state.playedSeconds >= 120) {
      playerRef.current?.seekTo(0, 'seconds');
    }
  };

  return (
    <div id='video-container'>
      <div className="video-section">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=Y7wDH3wb05o"
          playing={true}
          loop
          muted
          controls={false}
          onProgress={handleProgress}
          width="100%"
          height="100%"
          className="react-player"
        />

        <div className="video-content">
          <HelloWorld />
        </div>
      </div>
    </div>
  );
}
