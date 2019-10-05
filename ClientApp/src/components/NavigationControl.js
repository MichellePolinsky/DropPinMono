import React, { Component } from 'react'
import ReactMapGL, { NavigationControl } from 'react-map-gl'

class Map extends Component {
  state = {
    viewport: { longitude: -122.45, latitude: 37.78, zoom: 12 }
  }

  render() {
    const { viewport } = this.state
    return (
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <div style={{ position: 'absolute', right: 0 }}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    )
  }
}
