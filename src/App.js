import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import NowPlayingMovies from "./components/moleculs/nowPlayingMovies/NowPlayingMovies";
import PopularMovies from "./components/moleculs/popularMovies/PopularMovies";
import MovieDetails from "./components/moleculs/movieDetails/MovieDetails";

import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/now-playing-movies"
              component={NowPlayingMovies}
            />
            <Route exact path="/popular-movies" component={PopularMovies} />
            <Route exact path="/movie/:id" component={MovieDetails} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
