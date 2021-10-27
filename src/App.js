import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import PopularMovies from "./components/moleculs/popularMovies/PopularMovies";
import MovieDetails from "./components/moleculs/movieDetails/MovieDetails";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkmode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkmode/Theme";
import { useDarkMode } from "./components/darkmode/useDarkMode";

import "./App.scss";
import TopRatedMovies from "./components/moleculs/topRatedMovies/TopRatedMovies";
import UpcomingMovies from "./components/moleculs/upcomingMovies/UpcomingMovies";

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
              <Route exact path="/popular-movies" component={PopularMovies} />
              <Route
                exact
                path="/top-rated-movies"
                component={TopRatedMovies}
              />
              <Route exact path="/upcoming-movies" component={UpcomingMovies} />
              <Route exact path="/movie/:id" component={MovieDetails} />
              <Redirect from="*" to="/" />
            </Switch>
          </Layout>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
