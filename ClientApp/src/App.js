import React, { Component } from 'react'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PhotoForm from './components/PhotoForm'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/PhotoForm" component={PhotoForm} />
        </Switch>
      </Router>
    )
  }
}

export default App
