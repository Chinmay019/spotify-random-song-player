import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Player.css";
import PlaylistImage from "./PlaylistImage";
import PlaylistInfo from "./PlaylistInfo";
import SpotifyContext from "../../context/SpotifyContext";
import SongCard from "./SongCard";
import { getRandomSong } from "../../context/Action";
import MusicControlButton from "../musicController/MusicControlButton";

function Player() {
  const location = useLocation();
  const { allTracks, dispatch, playlistItems } = useContext(SpotifyContext);
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
      setCurrentlyPlaying(selectRandomSong(selectedPlaylistTracks.tracks));
    }
  }, [location.state.key]);

  const selectRandomSong = (tracks) => {
    const randTrack = getRandomSong(tracks);
    console.log(randTrack);
    if (
      randTrack &&
      randTrack.track &&
      randTrack.preview_url !== null &&
      randTrack.name !== null
    ) {
      console.log("randomly selected song is: " + randTrack.name);
      dispatch({ type: "SELECTED_RANDOM_SONG", payload: randTrack });
      return randTrack;
    } else {
      selectRandomSong(tracks);
    }
  };

  const [currentlyPlaying, setCurrentlyPlaying] = useState({});
  const [track, setTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="player-container flex">
      <div className="song-card-container">
        <SongCard />
      </div>
      <div className="track-container flex">
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
