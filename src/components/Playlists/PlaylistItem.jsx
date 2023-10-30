import React, { useContext, useEffect } from "react";
import SpotifyContext from "../../context/SpotifyContext";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { getPlaylistTracks, getRandomSong } from "../../context/Action";
import { HiPlay } from "react-icons/hi";
import "./Playlists.css";

function PlaylistItem({ name, item }) {
  const { dispatch, selectedPlaylistInfo, access_token, allTracks } =
    useContext(SpotifyContext);
  let navigate = useNavigate();
  let imageURL = "";
  const getImage = () => {
    item.images.map((img) => {
      if (img.height == 300 && img.width == 300) {
        imageURL = img.url;
      }
    });
    if (!imageURL) {
      item.images.map((e) => {
        if (e.url) {
          imageURL = e.url;
          return;
        }
      });
    }
  };
  getImage();

  const getTracksFromPlaylist = (id) => {
    const selectedPlaylistTracks = allTracks.filter((elem) => {
      return elem.playlist_id === id;
    })[0];
    console.log(selectedPlaylistTracks);
    dispatch({
      type: "SELECTED_PLAYLIST_ITEMS",
      payload: selectedPlaylistTracks,
    });
    return selectedPlaylistTracks;
  };

  const handleClick = () => {
    let elem = document.querySelector(`#playlist-item-${item?.id}`);
    if (elem.classList.contains("active")) {
      dispatch({
        type: "REMOVE_PLAYLIST",
        payload: item.id,
      });
    } else {
      dispatch({
        type: "SELECT_PLAYLIST",
        payload: {
          playlist_name: item.name,
          playlist_id: item.id,
          playlist_tracks: item.tracks,
          playlist_item_info: item,
        },
      });
    }
    elem.classList.toggle("active");
    if (elem.classList.contains("active")) {
      elem.classList.remove("non-active");
    } else {
      elem.classList.add("non-active");
    }
  };

  const handlePlayClick = async (playlist_id, item) => {
    const playlistTracks = await getPlaylistTracks(playlist_id, access_token);
    console.log(playlistTracks);
    if (playlistTracks) {
      dispatch({
        type: "SET_TRACKS",
        payload: playlistTracks,
        // {
        //   // playlist_id: playlist_id,
        //   tracks: playlistTracks,
        //   // total: playlistTracks.length,
        // },
      });
    }
    // const playlistTracks = getTracksFromPlaylist(playlist_id);
    navigate(`/player`);
  };

  return (
    <div
      id={`playlist-item-${item?.id}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      className="m-4 non-active"
    >
      {/* <div className="card card-compact transition-all duration-200 playlist-card"> */}
      <div className="playlist-card">
        <figure className="p-1.5 playlist-image">
          <img
            src={imageURL}
            className="border-base-content rounded-lg border border-opacity-5 p-1 "
          />
        </figure>
        {/* <div className="card-body text-center"> */}
        <div className="playlist-info">
          <span className="playlist-title">{name}</span>
          <span className="songs-info">{item.tracks.total} Songs</span>
          <div
            className="select-playlist"
            onClick={() => handlePlayClick(item.id, item)}
          >
            <HiPlay size={50} className="play-button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
