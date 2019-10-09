import React, { Component } from 'react'
import Home from './components/Home'
// import UnsplashHome from './components/UnsplashHome'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route exact path="/" component={UnsplashHome}></Route> */}
        </Switch>
      </Router>
    )
  }
}

export default App
