import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './components/Home'
import PhotoForm from './components/PhotoForm'
import PinPage from './components/PinPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/PhotoForm" component={PhotoForm} />
          <Route exact path="/PinPage" component={PinPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
