import React, { useEffect } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";

function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to || props.isActive;
  console.log(isActive);
  const itemClass = isActive ? "link-item active-link" : "link-item";
  // console.log(isActive);
  return (
    <Link to={props.to}>
      <div className={itemClass}>
        <IconContext.Provider value={{ size: "24px" }}>
          {props.icon}
          <span className="btn-title">{props.title}</span>
        </IconContext.Provider>
      </div>
    </Link>
  );
}

export default SidebarButton;
