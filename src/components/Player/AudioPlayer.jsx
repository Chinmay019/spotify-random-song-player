import React from "react";
import "./AudioPlayer.css";
import Spinner from "../Spinner/Spinner";
import WaveAnimation from "./WaveAnimation";

function AudioPlayer({ songInfo, setLoading }) {
  console.log("AudioPlayer songInfo: ", songInfo, typeof songInfo);
  if (setLoading) {
    return <Spinner />;
  }
  return (
    <div className="main-audio-player">
      <div className="duration flex">
        <span>0:01</span>
        <audio src={songInfo?.preview_url} controls autoPlay loop></audio>
        <WaveAnimation />
        <span>0:30</span>
      </div>
      Song Player and animation goes here
    </div>
  );
}

export default AudioPlayer;
