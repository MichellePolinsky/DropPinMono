import React, { Component } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* This next line makes map work */}
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
