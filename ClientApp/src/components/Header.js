import React from 'react'
import Logo from '../Images/Logo.png'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Header = () => {
  return (
    <main className="top">
      <section className="center">
        <div className="logo-header">
          <Link to="/">
            <img className="images" src={Logo} alt="Drop Pin Logo" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Header
