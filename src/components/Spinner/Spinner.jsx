import React from "react";
import spinner from "../../assets/Spinner.gif";

function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;
