import React, { createContext, useReducer } from "react";
import spotifyReducer from "./SpotifyReducer";
const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const initialState = {
    code: "",
    userId: "",
    access_token: "",
    refresh_token: "",
    expires_in: 0,
    loading: false,
    isLoggedIn: false,
    profileInfo: {},
    device_id: "",
    playlistItems: {},
    currentIndex: 0,
    playlistNew: {},
    selectedPlaylistInfo: {},
    allTracks: [],
    currentlyPlaying: {},
    previouslyPlayed: [],
    songIndexStack: [],
    top: -1,
    setSpinner: true,
    songAlbumInfo: {},
  };

  const [state, dispatch] = useReducer(spotifyReducer, initialState);

  return (
    <SpotifyContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContext;
