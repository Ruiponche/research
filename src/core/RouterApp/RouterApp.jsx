import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NavigationBar from 'core/NavigationBar/NavigationBar'
import PosterPage from 'pages/PosterPage'
import ResultPage from 'pages/ResultPage'
import WelcomePage from 'pages/WelcomePage'

export default function RouterApp() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/posters/:id">
          <PosterPage />
        </Route>
        <Route path="/search">
          <ResultPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}