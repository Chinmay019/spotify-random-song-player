import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";
import Spinner from "../Spinner/Spinner";
import WaveAnimation from "./WaveAnimation";

function AudioPlayer({
  songInfo = {},
  setLoading,
  total,
  currentIndex,
  setCurrentIndex,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  let audioSrc = songInfo?.preview_url;

  const audioRef = useRef(new Audio(audioSrc));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const startTimer = () => {
    clearInterval(intervalRef);

    intervalRef.current = setInterval(() => {
      setProgress(audioRef.current.currentTime);
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const attachLeadingZero = (num) => {
    return num > 9 ? num : "0" + num;
  };

  console.log("AudioPlayer songInfo: ", songInfo, typeof songInfo);
  if (setLoading) {
    return <Spinner />;
  }
  return (
    <div className="main-audio-player">
      <div className="duration flex">
        <span>0:{attachLeadingZero(Math.round(progress))}</span>
        {/* <audio src={audioSrc} controls autoPlay loop></audio> */}
        <WaveAnimation />
        <span>0:30</span>
      </div>
      Song Player and animation goes here
    </div>
  );
}

export default AudioPlayer;
