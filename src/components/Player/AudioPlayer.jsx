import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import WaveAnimation from "./WaveAnimation";
import MusicController from "./MusicController";

function AudioPlayer({
  songInfo = {},
  setLoading,
  total,
  currentIndex,
  setCurrentIndex,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
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
      console.log("inside audioSrc useEffect if block");
      clearInterval(intervalRef.current);
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef);
    }
  }, [audioSrc]);

  const playSongOnLoop = (value) => {
    console.log("playSongOnLoop value : ", value);
    if (value) {
      if (isPlaying && audioRef.current) {
        audioRef.current.addEventListener(
          "ended",
          () => {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          },
          false
        );
        console.log(audioRef.current);
      }
    } else {
      if (isPlaying && audioRef.current) {
        audioRef.current.removeEventListener(
          "ended",
          () => {
            audioRef.setAttribute("onended", () => {
              audioRef.current.pause();
            });
          },
          false
        );
        console.log(audioRef.current);
      }
    }
  };
  useEffect(() => {
    // if (isPlaying && loop && audioRef.current) {
    //   audioRef.current.addEventListener(
    //     "ended",
    //     () => {
    //       audioRef.current.currentTime = 0;
    //       audioRef.current.play();
    //     },
    //     false
    //   );
    // }
    console.log("loop value in useeffect loop: ", loop);
    if (loop) {
      if (isPlaying && audioRef.current) {
        console.log("inside loop useEffect if block");
        // audioRef.current.addEventListener(
        //   "ended",
        //   () => {
        //     audioRef.current.currentTime = 0;
        //     audioRef.current.play();
        //   },
        //   false
        // );
        audioRef.current.setAttribute("loop", true);
        console.log(audioRef.current);
      }
    } else {
      if (isPlaying && audioRef.current) {
        console.log("inside loop useEffect else block");
        // audioRef.current.removeEventListener(
        //   "ended",
        //   () => {
        audioRef.current.setAttribute("loop", false);
        //   },
        //   false
        // );
        console.log(audioRef.current);
      }
    }
  }, [loop]);

  useEffect(() => {
    if (isReady.current) {
      console.log("inside currentIndex useEffect if block");
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      console.log("inside currentIndex useEffect else block");
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      console.log("ended");
      console.log(navigate);
      // audioRef.current.removeEventListener(
      //   "ended",
      //   () => {
      //     if (loop) {
      //       audioRef.current.currentTime = 0;
      //       audioRef.current.play();
      //       console.log("inside event listener if");
      //     }
      //   },
      //   false
      // );
      audioRef.current.pause();
      setIsPlaying(false);
      // setLoop(false);
      console.log(audioRef);
      clearInterval(intervalRef.current);
    };
  }, []);

  const attachLeadingZero = (num) => {
    return num > 9 ? num + "" : "0" + num;
  };

  const handleNext = () => {
    console.log("next button pressed");
  };

  const handlePrevious = () => {
    console.log("previous button pressed");
  };

  // const handleLoop = (value) => {
  //   console.log(value);
  //   setLoop(value);
  // };

  const handlePlay = (value) => {
    console.log(value);
    if (value == "pause") {
      audioRef.current.pause();
    } else if (value == "play") {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  // console.log("AudioPlayer songInfo: ", songInfo, typeof songInfo);
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
      <MusicController
        isPlaying={isPlaying}
        loop={loop}
        setLoop={setLoop}
        setIsPlaying={setIsPlaying}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        // handleLoop={handleLoop}
        handlePlay={handlePlay}
        // playSongOnLoop={playSongOnLoop}
      />
    </div>
  );
}

export default AudioPlayer;
