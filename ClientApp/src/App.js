import React, { Component } from 'react'
// import Logo from './Images/Logo.png'
import Home from './components/Home'
// import Header from './components/Header'
import Results from './components/Results'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import 


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Results" component={Results}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
