import React from "react";
import "./PlaylistInfo.css";

function PlaylistInfo({ album }) {
  let { description } = album;
  if (description.trim().length == 0) {
    description = "Playlist created by " + album.owner.display_name;
  }
  console.log(album);
  return (
    <div className="playlist-desc-container flex">
      <div className="animate-album-name">{album.name}</div>
      <p>{description}</p>
    </div>
  );
}

export default PlaylistInfo;
