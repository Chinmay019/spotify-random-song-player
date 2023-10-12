import React, { useState } from "react";
import "./MusicController.css";
import {
  PiSkipBackBold,
  PiSkipForwardBold,
  PiPlayBold,
  PiPauseBold,
} from "react-icons/pi";
import { RxLoop } from "react-icons/rx";
import { IconContext } from "react-icons";

function MusicController({
  isPlaying,
  loop,
  setLoop,
  setIsPlaying,
  handleNext,
  handlePrevious,
  handlePlay,
  // playSongOnLoop,
}) {
  const [paused, setPaused] = useState(false);
  // const [songOnLoop, setSongOnLoop] = useState(false);
  // const [songLoopClass, setSongLoopClass] = useState("");
  // console.log("loop in MusicController is: ", loop);
  const loopClass = loop ? "active-loop" : "";
  const handlePlayPauseAction = () => {
    console.log("paused", paused);
    if (paused) {
      handlePlay("play");
      setPaused(false);
    } else {
      handlePlay("pause");
      setPaused(true);
    }
  };
  // const handleSongLoop = () => {
  //   console.log(songOnLoop);
  //   if (songOnLoop) {
  //     setSongOnLoop(false);
  //     setSongLoopClass("");
  //     loopClass = "";
  //     playSongOnLoop(false);
  //   } else {
  //     setSongOnLoop(true);
  //     setSongLoopClass("active-loop");
  //     // loopClass = "active-loop";
  //     playSongOnLoop(true);
  //   }
  // };
  return (
    <IconContext.Provider value={{ size: "32px" }}>
      <div className="control-buttons-wrapper flex">
        <div className="control-btn flex" onClick={handlePrevious}>
          <PiSkipBackBold />
        </div>
        {!paused ? (
          <div
            className="play-pause-button flex"
            onClick={handlePlayPauseAction}
            //   style={{ display: `${isPlaying} ? "none" : "inline-block"` }}
          >
            <PiPauseBold />
          </div>
        ) : (
          <div
            className="play-pause-button flex"
            onClick={handlePlayPauseAction}
            //   style={{ display: `${isPlaying} ? "inline-block" : "none"` }}
          >
            <PiPlayBold />
          </div>
        )}

        <div className="control-btn flex" onClick={handleNext}>
          <PiSkipForwardBold />
        </div>
        <div
          className="control-btn flex"
          onClick={() => (loop ? setLoop(false) : setLoop(true))}
        >
          <RxLoop className={loopClass} />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default MusicController;
