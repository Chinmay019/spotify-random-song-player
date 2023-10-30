import React from "react";
import "./Spinner.css";
import spinner from "../../assets/Spinner.gif";
import Loader from "../../assets/VZvw.gif";

function Spinner() {
  return (
    <div className="flex center-spinner spinner">
      {<img src={Loader} alt="Loading..." className="img-spinner" />}
    </div>
  );
}

export default Spinner;
