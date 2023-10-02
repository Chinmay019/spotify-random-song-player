import React from "react";
import "./AudioPlayer.css";

function AudioPlayer({ songInfo }) {
  console.log("AudioPlayer songInfo: ", songInfo, typeof songInfo);
  return (
    <div className="main-audio-player">
      <div>
        audio:
        <audio src={songInfo?.preview_url} controls autoPlay></audio>
      </div>
      Song Player and animation goes here
    </div>
  );
}

export default AudioPlayer;
