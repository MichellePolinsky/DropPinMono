import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import Pin from '../Images/Pin.png'

export default function HooksMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 27.724722,
    longitude: -82.741943,
    zoom: 15,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '100%'
  })
  console.log(props.selectedPhoto)
  return (
    <div id="map" className="map pad2">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoicC1wb2xpbnNrbWljaGVsbCIsImEiOiJjazFnbm16cGUxNmJzM2VwN2NpcjU3cDlrIn0.F78cmL4ogLFu-zVpet_73A'
        }
        mapStyle="mapbox://styles/p-polinskmichell/ck1gvw0y94yz91co4qlczvi68"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        {props.selectedPhoto && (
          <Marker
            latitude={parseFloat(props.selectedPhoto.latitude)}
            longitude={parseFloat(props.selectedPhoto.longitude)}
          >
            here
          </Marker>
        )}
      </ReactMapGL>
    </div>
  )
}
