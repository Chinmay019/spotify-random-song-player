const spotifyReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CODE":
      return {
        ...state,
        code: action.payload,
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        access_token: action.payload,
      };
    case "SET_EXPIRES_IN":
      return {
        ...state,
        expires_in: action.payload,
      };
    case "SET_REFRESH_TOKEN":
      return {
        ...state,
        refresh_token: action.payload,
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "GET_PROFILE_INFO":
      return {
        ...state,
        profileInfo: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    // case "UNSET_LOADING":
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    case "GET_USER_PLAYLIST":
      return {
        ...state,
        playlistNew: action.payload,
        loading: false,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "SELECT_PLAYLIST":
      return {
        ...state,
        selectedPlaylistInfo: action.payload,
      };
    case "SELECTED_PLAYLIST_ITEMS":
      return {
        ...state,
        playlistItems: action.payload,
      };
    case "SELECTED_RANDOM_SONG":
      return {
        ...state,
        currentlyPlaying: action.payload,
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        selectedPlaylistInfo: state.selectedPlaylistInfo.filter(
          (playlist) => playlist.playlist_id !== action.payload
        ),
      };
    case "SET_TRACKS":
      return {
        ...state,
        allTracks: action.payload,
      };
    case "SET_DEVICE_ID":
      return {
        ...state,
        device_id: action.payload,
      };
    case "SET_SONG_ALBUM_INFO":
      return {
        ...state,
        songAlbumInfo: action.payload,
      };
    case "RANDOMLY_SELECTED_TRACK":
      return {
        ...state,
        currentlyPlaying: action.payload,
      };
    case "SET_PREVIOUS_TRACK":
      return {
        ...state,
        previouslyPlayed: action.payload,
      };
    case "UPDATE_INDEX":
      return {
        ...state,
        top: action.payload,
      };
    case "UPDATE_SONG_STACK_INDEX":
      return {
        ...state,
        songIndexStack: [action.payload, ...state.songIndexStack],
      };
    case "SET_SPINNER":
      return {
        ...state,
        setSpinner: action.payload,
      };
    default:
      return state;
  }
};

export default spotifyReducer;
