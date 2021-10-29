import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Toggle from "../../atoms/dark-mode/Toggle";
import { GlobalStyles } from "../../atoms/dark-mode/globalStyles";
import { lightTheme, darkTheme } from "../../atoms/dark-mode/Theme";
import { useDarkMode } from "../../atoms/dark-mode/useDarkMode";

import "./Navbar.scss";

const Navbar = () => {
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
          <div className="links">
            <NavLink
              exact
              to="/"
              onClick={() => {
                setOpen(true);
                toggleNav();
              }}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/movies-series"
              onClick={() => {
                setOpen(true);
                toggleNav();
              }}
            >
              Movies
            </NavLink>
            <NavLink
              exact
              to="/upcoming-movies"
              onClick={() => {
                setOpen(true);
                toggleNav();
              }}
            >
              Upcoming Movies
            </NavLink>
            <ThemeProvider theme={themeMode}>
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </ThemeProvider>
          </div>
        </div>
        <div className="nav_links_desktop">
          <div className="little_menu">
            <p>Menu</p>
          </div>
          <NavLink exact to="/" className="link">
            <h3>• Home</h3>
          </NavLink>
          <NavLink exact to="/movies-series" className="link">
            <h3>• Movies - Series</h3>
          </NavLink>
          <NavLink exact to="/upcoming-movies" className="link">
            <h3>• Upcoming...</h3>
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
};

export default Navbar;
