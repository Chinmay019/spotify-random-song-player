import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Player.css";
import PlaylistImage from "./PlaylistImage";
import PlaylistInfo from "./PlaylistInfo";

function Player({ props }) {
  const location = useLocation();
  console.log(location);
  const [currentlyPlaying, setCurrentlyPlaying] = useState({});
  const [track, setTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="player-container flex">
      <div className="song-card-container">Song Info Card</div>
      <div className="track-container">
        Actual Player Container with surprise me at the bottom
      </div>
      <div className="playlist-info-container">
        <PlaylistImage images={location?.state?.item.images} />
        <PlaylistInfo album={location?.state?.item} />
      </div>
    </div>
  );
}

export default Player;
