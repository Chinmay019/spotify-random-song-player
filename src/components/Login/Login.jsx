import React from "react";
import "./Login.css";
import { authorizeUser } from "../../context/Action";

function Login() {
  //   const handleLoginClick = async () => {
  //     await authorizeUser();
  //   };

  return (
    <div className="flex h-screen page-container">
      <div className="login-div">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
          alt="Spotify Logo"
          className="spotify-login-logo"
        />
        <button
          className="btn btn-accent justify-between m-auto"
          onClick={() => authorizeUser()}
        >
          Login to Spotify
        </button>
      </div>
    </div>
  );
}

export default Login;
