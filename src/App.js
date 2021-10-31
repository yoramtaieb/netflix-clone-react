import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import MoviesSeries from "./components/pages/movies-series/MoviesSeries";
import UpcomingMovie from "./components/pages/upcoming-movies/UpcomingMovie";
import MovieDetails from "./components/molecules/movies/movie-details/MovieDetails";
import SerieDetails from "./components/molecules/series/serie-details/SeriesDetails";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/atoms/dark-mode/globalStyles";
import { lightTheme, darkTheme } from "./components/atoms/dark-mode/Theme";
import { useDarkMode } from "./components/atoms/dark-mode/useDarkMode";

import "./App.scss";

function App() {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <Router>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies-series" component={MoviesSeries} />
              <Route exact path="/upcoming-movies" component={UpcomingMovie} />
              <Route exact path="/movie/:id" component={MovieDetails} />
              <Route exact path="/serie/:id" component={SerieDetails} />
              <Redirect from="*" to="/" />
            </Switch>
          </Layout>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
