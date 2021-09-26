import React from "react";
import "./SideBar.css";
import Avatar from "@mui/material/Avatar";

function SideBar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./images/avabac.jpeg" alt=""></img>
        <Avatar className="sidebar__avatar"></Avatar>
        <h2>Daniel Tran</h2>
        <h4>Developer Intern</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3,000</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Developer")}
        {recentItem("Jobs")}
        {recentItem("Internships")}
        {recentItem("Well-being")}
        {recentItem("Motivation")}
      </div>
    </div>
  );
}

export default SideBar;
