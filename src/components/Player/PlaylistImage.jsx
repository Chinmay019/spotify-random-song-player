import React from "react";
import "./PlaylistImage.css";

function getImageURL(images) {
  let imageURL = images?.map((elem) => {
    if (elem.url && elem.url.length) {
      return elem.url;
    }
  });
  return imageURL && imageURL.length ? imageURL[0] : defaultImageURL;
}

function PlaylistImage({ images } = []) {
  const imageURL = getImageURL(images);
  return (
    // <div className="playlist-image-container flex">
    <div className="album-image flex">
      <img src={imageURL} alt="Playlist Photo" className="playlist-photo"></img>
      <div className="shadow">
        <img src={imageURL} alt="Playlist Photo" className="shadow-img"></img>
      </div>
    </div>
    // </div>
  );
}

export default PlaylistImage;
