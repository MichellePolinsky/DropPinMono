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
        <div id="map" className="map pad2">
          <MapGL
            {...viewport}
            onViewportChange={viewport => this.setState({ viewport })}
            // mapStyle="mapbox://styles/mlp227/ck16qxzuy07pn1cp7vfwpoe3y"
            // mapStyle="mapbox://styles/mlp227/cj4k8wmwy5lbt2smsigkbh18e"
            // mapboxApiAccessToken="pk.eyJ1IjoibWxwMjI3IiwiYSI6ImNrMTZvdm5udzE3eW0zZG1vOWVpYXZwZW0ifQ.LR7r8w9Dt7Wxw6eyfXQ7Wg"
            mapStyle="mapbox://styles/mapbox/cj4k8wmwy5lbt2smsigkbh18e"
            mapboxApiAccessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
          ></MapGL>
        </div>
      </>
    )
  }
}

export default Map

// cj4k8wmwy5lbt2smsigkbh18e

// <div class="w-full h-full" style="background-size:cover;background-position:center;background-image:url(https://api.mapbox.com/styles/v1/mapbox/cj4k8wmwy5lbt2smsigkbh18e/static/-77.03213,38.88344,4.9,0,0/600x600@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA&amp;logo=false&amp;attribution=false);" title="Preview of Standard style" data-reactid="605"></div>
