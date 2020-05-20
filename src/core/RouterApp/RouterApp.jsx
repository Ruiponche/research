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
      <div>
        <NavigationBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/poster">
            <PosterPage />
          </Route>
          <Route path="/search">
            <ResultPage />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}