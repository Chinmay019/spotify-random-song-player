import React from "react";
import "./AudioPlayer.css";
import Spinner from "../Spinner/Spinner";

function AudioPlayer({ songInfo, setLoading }) {
  console.log("AudioPlayer songInfo: ", songInfo, typeof songInfo);
  if (setLoading) {
    return <Spinner />;
  }
  return (
    <div className="main-audio-player">
      <div>
        audio:
        <audio src={songInfo?.preview_url} controls autoPlay loop></audio>
      </div>
      Song Player and animation goes here
    </div>
  );
}

export default AudioPlayer;
