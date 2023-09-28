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
  console.log(images);
  const imageURL = getImageURL(images);
  console.log(imageURL);
  return (
    <div className="playlist-image-container">
      <img src={imageURL} alt="Playlist Photo" className="playlist-photo"></img>
    </div>
  );
}

export default PlaylistImage;
