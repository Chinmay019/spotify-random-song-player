import React, { useContext, useEffect } from "react";
import SpotifyContext from "../../context/SpotifyContext";
import _ from "lodash";
import { getPlaylistTracks } from "../../context/Action";
import { HiPlay } from "react-icons/hi";
import "./Playlists.css";

function PlaylistItem({ name, item }) {
  const { dispatch, selectedPlaylists, access_token } =
    useContext(SpotifyContext);
  useEffect(() => {
    const getTracks = async () => {
      const data = await getPlaylistTracks(item?.id, access_token);
      // const data = tracksList.data;
      console.log(data);
      if (data) {
        dispatch({
          type: "SET_TRACKS",
          payload: {
            playlist_id: item?.id,
            tracks: data.items,
            total: data.total,
          },
        });
      }
    };
    getTracks();
  }, [item.id]);
  let imageURL = "";
  const getImage = () => {
    console.log("inside getImage");
    console.log(item);
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

  // const verifyPlaylistPresent = (p_id) => {
  //   if (!_.isEmpty(selectedPlaylists) && selectedPlaylists.length) {
  //     let playlistItem = _.find(selectedPlaylists, (it) => {
  //       return it.playlist_id === p_id;
  //     });
  //     console.log(playlistItem);
  //     return playlistItem;
  //   }
  //   return false;
  // };

  const handleClick = () => {
    let elem = document.querySelector(`#playlist-item-${item?.id}`);
    if (elem.classList.contains("active")) {
      console.log("playlist selected");
      console.log("selected item: ", item?.id);
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
        },
      });

      // const getTracks = async () => {
      //   const tracksList = await getPlaylistTracks(item?.id, access_token);
      //   const data = await tracksList.data;
      //   if (data) console.log(data);
      // };
      // getTracks();
    }
    elem.classList.toggle("active");
    if (elem.classList.contains("active")) {
      elem.classList.remove("non-active");
    } else {
      elem.classList.add("non-active");
    }
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
            className="border-base-content bg-base-300 rounded-lg border border-opacity-5 p-1 "
          />
        </figure>
        {/* <div className="card-body text-center"> */}
        <div className="playlist-info">
          <span className="playlist-title">{name}</span>
          <span className="songs-info">{item.tracks.total} Songs</span>
          <div className="select-playlist">
            <HiPlay size={50} className="play-button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
