import React from 'react'
import Logo from '../Images/Logo.png'

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo-header">
          <img className="images" src={Logo} alt="Drop Pin Logo" />
        </div>
      </header>
    </div>
  )
}

export default Header
