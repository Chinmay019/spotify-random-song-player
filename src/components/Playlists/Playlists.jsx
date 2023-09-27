import React, { useEffect, useContext, useState } from "react";
import SpotifyContext from "../../context/SpotifyContext";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { getPlaylistInfo } from "../../context/Action";
import PlaylistItem from "./PlaylistItem";
import _ from "lodash";

function Playlists() {
  const navigate = useNavigate();
  const { loading, access_token, isLoggedIn, dispatch, playlistNew, userId } =
    useContext(SpotifyContext);

  useEffect(() => {
    console.log("useeffect called in playlist");
    const getPlaylists = async () => {
      console.log("userId", userId);
      const resp = await getPlaylistInfo(access_token);
      console.log(resp);
      if (resp) {
        dispatch({ type: "GET_USER_PLAYLIST", payload: resp });
      }
    };
    getPlaylists();
  }, [access_token]);

  //   useEffect(() => {
  //     let ignore = false;

  //     // if (!isLoggedIn) {
  //     //   return navigate("/");
  //     // }
  //     const getPlayListData = async () => {
  //       if (isLoggedIn) {
  //         console.log("running once");
  //         console.log("userId : ", user_id, " access_token: ", access_token);
  //         dispatch({ type: "SET_LOADING" });
  //         const resp = await getPlaylistInfo(user_id, access_token);
  //         console.log("ignore", ignore);
  //         // if (!ignore) {
  //         //   if (total) {
  //         //     setTotalCount(total);
  //         //   }
  //         //   if (items && items.length) {
  //         //     setItemsMap(items);
  //         //   }
  //         // if (resp.status == 200) {
  //         //   const resp = resp.data;
  //         console.log(resp);
  //         dispatch({ type: "GET_USER_PLAYLIST", payload: resp });
  //         // }
  //         // }
  //       }
  //     };

  //     getPlayListData();

  //     return () => {
  //       ignore = true;
  //     };
  //   }, []);
  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       return navigate("/");
  //     }
  //   }, []);

  return (
    // <div className="overflow-y-scroll overflow-x-hidden max-h-[30vw] ">
    <div className="flex flex-grow overflow-y-auto pl-3">
      {/* <h1 className="text-xl mt-5">
        {!_.isEmpty(playlistNew) && playlistNew.total} Playlists
      </h1> */}
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 h-[400px]">
        {playlistNew?.items?.map((item) => (
          <PlaylistItem key={item.id} name={item.name} item={item} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Playlists;
