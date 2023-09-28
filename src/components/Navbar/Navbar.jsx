import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiSpotify } from "react-icons/si";
import "./Navbar.css";
// import MovieContext from "../context/MovieContext";

function Navbar() {
  //   const { dispatch } = useContext(MovieContext);

  return (
    <div className="navbar-container">
      <div className="flex items-center">
        <SiSpotify size={40} className="fill-current text-white-700 m-3.5" />
        <Link to="/login">
          <button className="btn btn-ghost normal-case text-xl">
            <div className="header-title">Spotify Random Player</div>
          </button>
        </Link>
      </div>
      <div className="about-button">
        <Link to="/about">
          <button className="btn btn-ghost">About</button>
        </Link>
      </div>
    </div>
    // <div className="navbar bg-base-100 lg:w-full md:w-full xl:w-full h-16">
    //   <div className="flex-1">
    //     <SiSpotify size={40} className="fill-current text-white-700 m-3.5" />
    //     <Link to="/login">
    //       <button
    //         className="btn btn-ghost normal-case text-xl"
    //         // onClick={() => dispatch({ type: "GO_TO_HOME" })}
    //       >
    //         Spotify Random Player
    //       </button>
    //     </Link>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal px-1 text-lg">
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Navbar;
