import React, { Component } from 'react'
import UnsplashHome from './components/UnsplashHome'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* This next line makes map work */}
          <Route exact path="/" component={UnsplashHome}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
