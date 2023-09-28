import React, { useState, useEffect, useContext, useMemo } from "react";
import Player from "./Pages/PlayerFirst";
import Spinner from "./Spinner/Spinner";
import SpotifyContext from "../context/SpotifyContext";
import { getRandomSong } from "../context/Action";
import _ from "lodash";

function RandomSelect() {
  const {
    access_token,
    loading,
    isLoggedIn,
    allTracks,
    currentlyPlaying,
    previouslyPlayed,
    dispatch,
  } = useContext(SpotifyContext);
  const [playerIns, setPlayer] = useState();

  useEffect(() => {
    if (isLoggedIn) {
      if (!_.isEmpty(allTracks) && allTracks.length) {
        const track = getRandomSong(allTracks);
        console.log("selected tracks is: ", track);
        dispatch({ type: "RANDOMLY_SELECTED_TRACK", payload: track });
      }
    }
  }, [allTracks]);

  // if (loading) {
  //   return <Spinner />;
  // }

  // const createPlayer = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://sdk.scdn.co/spotify-player.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   window.onSpotifyWebPlaybackSDKReady = () => {
  //     const player = new window.Spotify.Player({
  //       name: "Web Playback SDK",
  //       getOAuthToken: (cb) => {
  //         cb(access_token);
  //       },
  //       volume: 0.5,
  //     });

  //     //   setPlayer(player);

  //     player.addListener("ready", ({ device_id }) => {
  //       console.log("Ready with Device ID", device_id);
  //     });

  //     player.addListener("not_ready", ({ device_id }) => {
  //       console.log("Device ID has gone offline", device_id);
  //     });

  //     player.connect();
  //   };
  // };
  // if (!_.isEmpty(currentlyPlaying)) {
  //   createPlayer();
  // }

  return (
    <div>
      Random Song Selected
      <Player />
    </div>
  );
}

export default RandomSelect;
