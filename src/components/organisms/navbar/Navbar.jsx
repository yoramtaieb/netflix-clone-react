import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Toggle from "../../darkmode/Toggle";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../darkmode/globalStyles";
import { lightTheme, darkTheme } from "../../darkmode/Theme";
import { useDarkMode } from "../../darkmode/useDarkMode";

import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [heightNav, setHeightNav] = useState("0%");
  const [theme, themeToggler] = useDarkMode();

  const toggleNav = () => {
    setOpen(!open);
    if (open === true) {
      setHeightNav("100%");
    } else {
      setHeightNav("0%");
    }
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <nav className="nav">
        <div className="title">
          <NavLink to="/">
            <p className="logo">
              <span>Net</span>flix.
            </p>
          </NavLink>
        </div>
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
          <NavLink exact to="/" className="link">
            <h3>Home</h3>
          </NavLink>
          <NavLink exact to="/popular-movies" className="link">
            <h3>Popular Movies</h3>
          </NavLink>
        </div>
        <div className="toggle">
          {theme === "light" ? (
            <p>Press for DarkMode</p>
          ) : (
            <p>Press for LightMode</p>
          )}
          <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </ThemeProvider>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
