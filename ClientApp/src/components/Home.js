import React, { Component } from 'react'
import Header from './Header'
import Map from './Map'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <section className="map_container">
            <div className="location_buttons">
              <input
                type="text"
                value="Where to?"
                className="enter_destination"
              ></input>

              <button className="explore_nearby">Go Explore</button>
            </div>
          </section>
          <Map />
        </div>
      </div>
    )
  }
}
export default Home
