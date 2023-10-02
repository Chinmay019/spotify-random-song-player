import React from "react";
import "./SongCard.css";

function getImageURL(images) {
  let imageURL = images?.map((elem) => {
    if (elem.url && elem.url.length) {
      return elem.url;
    }
  });
  return imageURL && imageURL.length ? imageURL[0] : defaultImageURL;
}

const getArtist = (artists) => {
  let artistsName = "";
  artists.forEach((elem) => {
    if (artistsName.trim().length > 0) {
      artistsName += ", " + elem.name;
    } else {
      artistsName += elem.name;
    }
  });
  return artistsName;
};

function SongCard({ songInfo }) {
  const images = songInfo?.album?.images;
  const imageUrl = images && getImageURL(images);
  const artist = getArtist(songInfo?.artists);
  return (
    <div className="song-card flex">
      <div className="song-album-container">
        <img
          src={imageUrl}
          alt="Song Album image"
          className="song-album-img"
        ></img>
      </div>
      <div className="song-information flex">
        <div className="song-name">{songInfo?.name}</div>
        <div className="artist-name">{artist.length && artist}</div>
        <div className="album-name">{songInfo?.album?.name}</div>
        <div className="release-date">{songInfo?.album?.release_date}</div>
      </div>
    </div>
  );
}

export default SongCard;
