import React from "react";
import "./Player.css";
function Player() {
  return (
    <div className="player-container flex">
      <div className="song-card-container">Song Info Card</div>
      <div className="track-container">
        Actual Player Container with surprise me at the bottom
      </div>
      <div className="playlist-info-container">Playlist Info Card</div>
    </div>
  );
}

export default Player;
