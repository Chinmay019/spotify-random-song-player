import React from "react";
import "./WaveAnimation.css";

function WaveAnimation({ isPlaying }) {
  const waveClass = isPlaying ? "wave" : "candle";
  return (
    <div className="center flex">
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
      <div className={`${waveClass}`}></div>
    </div>
  );
}

export default WaveAnimation;
