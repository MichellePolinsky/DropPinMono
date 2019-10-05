import React, { Component } from 'react'
import MapGL, { NavigationControl } from 'react-map-gl'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 15,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '75%'
      }
    }
  }
  render() {
    const { viewport } = this.state
    return (
      <>
        {/* <Header /> */}
        <div id="map" class="map pad2">
          <MapGL
            {...viewport}
            onViewportChange={viewport => this.setState({ viewport })}
            mapStyle="mapbox://styles/mlp227/ck16qxzuy07pn1cp7vfwpoe3y"
            mapboxApiAccessToken="pk.eyJ1IjoibWxwMjI3IiwiYSI6ImNrMTZvdm5udzE3eW0zZG1vOWVpYXZwZW0ifQ.LR7r8w9Dt7Wxw6eyfXQ7Wg"
          ></MapGL>
        </div>
      </>
    )
  }
}

export default Map
