import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Player.css";
import PlaylistImage from "./PlaylistImage";
import PlaylistInfo from "./PlaylistInfo";
import SpotifyContext from "../../context/SpotifyContext";

function Player() {
  const location = useLocation();
  const { allTracks, dispatch } = useContext(SpotifyContext);
  console.log(location);
  useEffect(() => {
    if (location.state) {
      const data = allTracks.filter((elem) => {
        return elem.playlist_id === location.state.playlist_id;
      });
      const selectedPlaylistTracks = data[0];
      console.log(selectedPlaylistTracks);
      dispatch({
        type: "SELECTED_PLAYLIST_ITEMS",
        payload: selectedPlaylistTracks,
      });
      setTrack(selectedPlaylistTracks);
    }
  }, [location.state.key]);

  const [currentlyPlaying, setCurrentlyPlaying] = useState({});
  const [track, setTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="player-container flex">
      <div className="song-card-container">Song Info Card</div>
      <div className="track-container">
        Actual Player Container with surprise me at the bottom
      </div>
      <div className="playlist-info-container flex">
        <PlaylistImage images={location?.state?.item.images} />
        <PlaylistInfo album={location?.state?.item} />
      </div>
    </div>
  );
}

export default Player;
