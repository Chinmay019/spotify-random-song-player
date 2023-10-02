import React from "react";
import { useLocation } from "react-router-dom";
import "./Player.css";
import PlaylistImage from "./PlaylistImage";
import PlaylistInfo from "./PlaylistInfo";
import SpotifyContext from "../../context/SpotifyContext";
import SongCard from "./SongCard";
import MusicControlButton from "../musicController/MusicControlButton";
import AudioPlayer from "./AudioPlayer";

function Player() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="player-container flex">
      <div className="song-card-container">
        <SongCard songInfo={location?.state?.song} />
      </div>
      <div className="track-container">
        <AudioPlayer songInfo={location?.state?.song} />
        <MusicControlButton />
        <MusicControlButton />
        <MusicControlButton />
      </div>
      <div className="playlist-info-container flex">
        <PlaylistImage images={location?.state?.item.images} />
        <PlaylistInfo album={location?.state?.item} />
      </div>
    </div>
  );
}

export default Player;
