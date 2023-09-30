import React, { useState, useEffect, useContext } from "react";
import "./SongCard.css";
import SpotifyContext from "../../context/SpotifyContext";

function getImageURL(images) {
  let imageURL = images?.map((elem) => {
    if (elem.url && elem.url.length) {
      return elem.url;
    }
  });
  return imageURL && imageURL.length ? imageURL[0] : defaultImageURL;
}

function SongCard() {
  const { dispatch, currentlyPlaying } = useContext(SpotifyContext);

  // useEffect(() => {}, [currentlyPlaying?.id]);
  const images = currentlyPlaying?.album?.images;
  const imageURL = getImageURL(images);

  return (
    <div className="song-card flex">
      <div className="song-album-container">
        <img
          src={imageURL}
          alt="Song Album image"
          className="song-album-img"
        ></img>
      </div>
      <div>Artist scroller goes here</div>
    </div>
  );
}

export default SongCard;
