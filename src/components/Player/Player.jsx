import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Player.css";
import PlaylistCard from "./PlaylistCard";
import SpotifyContext from "../../context/SpotifyContext";
import SongCard from "./SongCard";
import AudioPlayer from "./AudioPlayer";
import Shimmer from "../Shimmer/Shimmer";
import Spinner from "../Spinner/Spinner";
import { getRandomSong } from "../../context/Action";

function Player() {
  const { allTracks, setSpinner, dispatch } = useContext(SpotifyContext);
  console.log(setSpinner);
  let setLoading = false;
  const location = useLocation();
  let selectedSongTrack = {};
  if (!allTracks || !allTracks.length) {
    return;
  }
  useEffect(() => {
    const selectRandomSong = (tracks) => {
      const randTrack = getRandomSong(tracks);
      console.log(randTrack);
      if (
        randTrack &&
        randTrack.track &&
        randTrack.preview_url !== null &&
        randTrack.name !== null
      ) {
        console.log("randomly selected song is: " + randTrack);
        const { album } = randTrack;
        dispatch({ type: "SET_SONG_ALBUM_INFO", payload: album });
        dispatch({ type: "SELECTED_RANDOM_SONG", payload: randTrack });
        dispatch({ type: "SET_SPINNER", payload: false });
        return randTrack;
      } else {
        selectRandomSong(tracks);
      }
    };

    let randomSongSelected = undefined;
    dispatch({ type: "SET_SPINNER", payload: true });
    do {
      randomSongSelected = selectRandomSong(allTracks);
    } while (randomSongSelected === undefined);

    console.log(randomSongSelected);

    selectedSongTrack = randomSongSelected;
  }, []);

  return (
    <div className="block">
      {setSpinner ? (
        // <div className="player-container flex">
        //   <Shimmer />
        //   <Shimmer />
        // </div>
        <Spinner />
      ) : (
        <div className="player-container flex">
          <div className="song-card-container flex">
            <SongCard setLoading={setLoading} />
          </div>
          {console.log(selectedSongTrack)}
          <div className="track-container flex">
            <span className="song-title-header">{selectedSongTrack?.name}</span>
            <AudioPlayer
              // setSongInfo={setSongInfo}
              total={20}
            />
          </div>
          <div className="playlist-info-container flex">
            <PlaylistCard setLoading={setLoading} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
