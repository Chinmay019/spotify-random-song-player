import React, { useContext } from "react";
import "./Sidebar.css";
import { BsFire, BsFillPlayCircleFill } from "react-icons/bs";
import { BiSolidPlaylist } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import SidebarButton from "./SidebarButton";
import SpotifyContext from "../../context/SpotifyContext";

function Sidebar() {
  const { profileInfo } = useContext(SpotifyContext);
  console.log(profileInfo, "from sidebar");

  return (
    // <div className="fixed top-16 w-72 flex px-4 py-5 overflow-auto h-full">
    <div className="sidebar-container">
      <div className="profilepic-container">
        <img
          src="https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg"
          alt="profile-picture"
          className="profile-pic"
        ></img>
        <span className="username">{profileInfo?.display_name}</span>
      </div>
      <div className="links-container">
        <SidebarButton title="Trending" to="/trending" icon={<BsFire />} />
        <SidebarButton
          title="Player"
          to="/player"
          icon={<BsFillPlayCircleFill />}
        />
        <SidebarButton
          title="Playlists"
          to="/playlists"
          icon={<BiSolidPlaylist />}
        />
      </div>
      <SidebarButton title="Sign Out" to="/signout" icon={<FaSignOutAlt />} />
    </div>
  );
}

export default Sidebar;
