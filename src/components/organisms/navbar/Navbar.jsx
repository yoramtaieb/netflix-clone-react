import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [heightNav, setHeightNav] = useState("0%");

  const toggleNav = () => {
    setOpen(!open);
    if (open === true) {
      setHeightNav("100%");
    } else {
      setHeightNav("0%");
    }
  };

  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          <p className="logo">
            <span>Net</span>flix.
          </p>
        </NavLink>
        <div
          className={!open ? "nav_burger open" : "nav_burger"}
          onClick={() => toggleNav()}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="myNav" className="overlay" style={{ height: heightNav }}>
          <div className="links"></div>
        </div>
        <div className="nav_links_desktop">
          <div className="little_menu">
            <p>Menu</p>
          </div>
          <NavLink exact to="/" className="link" activeclassname="active">
            <h3>Home</h3>
          </NavLink>
          <NavLink
            exact
            to="/now-playing-movies"
            className="link"
            activeclassname="active"
          >
            <h3>NowPlaying Movies</h3>
          </NavLink>
          <NavLink
            exact
            to="/popular-movies"
            className="link"
            activeclassname="active"
          >
            <h3>Popular Movies</h3>
          </NavLink>
          <h3 className="link">Others</h3>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
