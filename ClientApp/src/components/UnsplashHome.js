import React, { Component } from 'react'
import Header from './Header'
import Map from './Map'
import PhotoPage from './PhotoPage'

class UnsplashHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <section className="map_container">
            <div className="location_buttons">
              <input
                type="text"
                placeholder="Where to?"
                className="enter_destination"
              ></input>

              <button className="explore_nearby">Go Explore</button>
            </div>
          </section>
          <Map />
          <PhotoPage />
        </div>
      </div>
    )
  }
}
export default UnsplashHome
