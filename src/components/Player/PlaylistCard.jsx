import React from "react";
import "./PlaylistCard.css";
import Spinner from "../Spinner/Spinner";

function getImageURL(images) {
  let imageURL = images?.map((elem) => {
    if (elem.url && elem.url.length) {
      return elem.url;
    }
  });
  return imageURL && imageURL.length ? imageURL[0] : defaultImageURL;
}

function PlaylistCard({ images = [], setLoading, album = {} }) {
  console.log("Loading in PlaylistImage: ", setLoading);
  if (setLoading) {
    return <Spinner />;
  }
  const imageURL = getImageURL(images);
  let { description } = album;
  if (description.trim().length == 0) {
    description = "Playlist created by " + album.owner.display_name;
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
      <div className="animate-album-name">{album.name}</div>
      <p>{description}</p>
    </div>
  );
}

export default PlaylistCard;
