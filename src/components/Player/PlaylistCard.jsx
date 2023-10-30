import React, { useEffect, useContext } from "react";
import "./PlaylistCard.css";
import Spinner from "../Spinner/Spinner";
import SpotifyContext from "../../context/SpotifyContext";

function getImageURL(images) {
  let imageURL = images?.map((elem) => {
    if (elem.url && elem.url.length) {
      return elem.url;
    }
  });
  return imageURL && imageURL.length ? imageURL[0] : defaultImageURL;
}

function PlaylistCard() {
  const { setSpinner, selectedPlaylistInfo } = useContext(SpotifyContext);
  if (setSpinner) {
    return <Spinner />;
  }
  const { playlist_id, playlist_name, playlist_item_info } =
    selectedPlaylistInfo;
  const { images, owner, id } = playlist_item_info;
  let { description } = playlist_item_info;
  const imageURL = getImageURL(images);
  // let imageURL = "";
  // let description = "";
  // let album = {};
  // const { playlist_id } = selectedPlaylistInfo;
  // useEffect(() => {
  //   album = selectedPlaylistInfo?.playlist_item_info;
  //   const { images } = album;
  //   imageURL = getImageURL(images);
  //   console.log(album);
  //   console.log("imageURL: ", imageURL);
  //   description = selectedPlaylistInfo?.playlist_item_info.name;
  //   console.log(description);
  // }, []);
  if (description.trim().length == 0) {
    description = "Playlist created by " + owner.display_name;
  }
  return (
    <div className="playlist-image-container flex">
      <div className="album-image flex">
        <img
          src={imageURL}
          alt="Playlist Photo"
          className="playlist-photo"
        ></img>
        <div className="shadow">
          <img src={imageURL} alt="Playlist Photo" className="shadow-img"></img>
        </div>
      </div>
      <div className="album-info flex">
        <div className="animate-album-name">{playlist_name}</div>
        <p className="playlist-desc">{description}</p>
      </div>
    </div>
  );
}

export default PlaylistCard;
