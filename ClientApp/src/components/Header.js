import React from 'react'
import Logo from '../Images/Logo.png'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'

const Header = () => {
  return (
    <Router>
      <div className="logo-header">
        <img className="images" src={Logo} alt="Drop Pin Logo" />
      </div>
      <Switch>
        <Route exact path="/" component={App.js} />
      </Switch>
    </Router>
  )
}

export default Header
