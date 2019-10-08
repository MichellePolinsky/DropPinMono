import React, { Component } from 'react'
import Header from './Header'
import Map from './Map'
import PhotoPage from './PhotoPage'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="map_container">
          <div className="location_buttons">
            <input className="typed" placeholder="Where To?"></input>
            <button className="search">Go Explore</button>
          </div>
        </section>

        <Map />
        <PhotoPage />
      </div>
    )
  }
}
export default Home
