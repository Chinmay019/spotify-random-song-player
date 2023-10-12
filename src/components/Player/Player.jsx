import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Player.css";
import PlaylistCard from "./PlaylistCard";
import SpotifyContext from "../../context/SpotifyContext";
import SongCard from "./SongCard";
import AudioPlayer from "./AudioPlayer";
import Shimmer from "../Shimmer/Shimmer";

function Player() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let setLoading = false;
  const location = useLocation();
  console.log(location.state);

  const params = useParams();
  console.log(params);
  if (!params || !params.playlist_id || !params.song_id) {
    setLoading = true;
  }

  return (
    <div>
      {setLoading ? (
        <div className="player-container flex">
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        <div className="player-container flex">
          <div className="song-card-container">
            <SongCard
              songInfo={location?.state?.song}
              setLoading={setLoading}
            />
          </div>
          <div className="track-container flex">
            <span className="song-title-header">
              {location?.state?.song?.name}
            </span>
            <AudioPlayer
              songInfo={location?.state?.song}
              setLoading={setLoading}
              total={20}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
          <div className="playlist-info-container flex">
            <PlaylistCard
              images={location?.state?.item.images}
              setLoading={setLoading}
              album={location?.state?.item}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
