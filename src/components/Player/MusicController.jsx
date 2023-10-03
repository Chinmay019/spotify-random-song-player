import React from "react";
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
  setIsPlaying,
  handleNext,
  handlePrevious,
  handleLoop,
}) {
  console.log("loop in MusicController is: ", loop);
  const loopClass = loop ? "active-loop" : "";
  return (
    <IconContext.Provider value={{ size: "32px" }}>
      <div className="control-buttons-wrapper flex">
        <div className="control-btn flex" onClick={handlePrevious}>
          <PiSkipBackBold />
        </div>
        {isPlaying ? (
          <div
            className="play-pause-button flex"
            //   style={{ display: `${isPlaying} ? "none" : "inline-block"` }}
          >
            <PiPauseBold />
          </div>
        ) : (
          <div
            className="play-pause-button flex"
            //   style={{ display: `${isPlaying} ? "inline-block" : "none"` }}
          >
            <PiPlayBold />
          </div>
        )}

        <div className="control-btn flex" onClick={handleNext}>
          <PiSkipForwardBold />
        </div>
        <div className="control-btn flex" onClick={() => handleLoop(!loop)}>
          <RxLoop className={loopClass} />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default MusicController;
