import React, { useContext, useEffect } from "react";
import SpotifyContext from "../../context/SpotifyContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Playlist from "../Playlists/Playlists";
import Selected from "../Selected";
import { getUserInfo } from "../../context/Action";
import _ from "lodash";

function Home() {
  const navigate = useNavigate();
  const {
    loading,
    isLoggedIn,
    access_token,
    dispatch,
    profileInfo,
    selectedPlaylists,
  } = useContext(SpotifyContext);

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/");
    }
    const getProfileInfo = async () => {
      console.log("getInfo in home");
      if (isLoggedIn) {
        console.log("user logged in");
        dispatch({ type: "SET_LOADING" });
        const resp = await getUserInfo(access_token);
        console.log(resp);
        dispatch({ type: "SET_USER_ID", payload: resp.id });
        dispatch({ type: "GET_PROFILE_INFO", payload: resp });
        // dispatch({ type: "UNSET_LOADING" });
      }
    };
    getProfileInfo();
  }, []);

  // const homeContainer = document.querySelector(`#home-container`);
  // if(homeContainer){
  //   if(loading){

  //   }
  // }

  return (
    <div id="home-container" className="container ml-72">
      {/* Home Container <span>Successfully logged in </span>
        <p>
          Welcome <span className="text-xl">{profileInfo.display_name}</span>
        </p>
        <p>
          ID : <span>{profileInfo.id}</span>
        </p> */}
      <div>
        {/* {!_.isEmpty(selectedPlaylists) && selectedPlaylists.length ? (
          <Selected />
        ) : null} */}
      </div>
      {/* <Playlist user_id={profileInfo.id} /> */}
    </div>
  );
}

export default Home;
