import React, { useContext, useEffect } from "react";
import SpotifyContext from "../context/SpotifyContext";
import { getAccessToken } from "../context/Action";
import { redirect, useNavigate } from "react-router-dom";

function Code() {
  const { isLoggedIn, dispatch } = useContext(SpotifyContext);
  let navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    console.log("code:" + code);
    if (code) {
      dispatch({ type: "UPDATE_CODE", payload: code });
    }
    const getData = async () => {
      dispatch({ type: "SET_LOADING" });
      const resp = await getAccessToken(code);
      if (resp.status == 200) {
        console.log(resp.status);
        console.log(resp.data);
        const { access_token, expires_in, refresh_token } = resp.data;
        console.log("access_token:" + access_token);
        console.log("refresh_token:" + refresh_token);
        console.log("expires_in:" + expires_in);
        if (access_token) {
          dispatch({ type: "SET_ACCESS_TOKEN", payload: access_token });
        }
        if (expires_in) {
          dispatch({ type: "SET_EXPIRES_IN", payload: expires_in });
        }
        if (refresh_token) {
          dispatch({ type: "SET_REFRESH_TOKEN", payload: refresh_token });
        }
        if (access_token && refresh_token) {
          dispatch({ type: "SET_LOGGED_IN", payload: true });
        }
      } else {
        console.log("some error occurred");
      }
    };
    getData();
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      console.log("logged in");
      return navigate("/home");
    }
  }, [isLoggedIn]);
}

export default Code;
