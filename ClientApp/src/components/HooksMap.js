import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import Pin from '../Images/Pin.png'

export default function HooksMap(props) {
  console.log({ props })
  const [viewport, setViewport] = useState({
    latitude: props.selectedPhoto.latitude,
    longitude: props.selectedPhoto.longitude,
    zoom: 15,
    width: '100%',
    height: '100%'
  })
  useEffect(() => {
    setViewport(prev => {
      prev.latitude = parseFloat(props.selectedPhoto.latitude)
      prev.longitude = parseFloat(props.selectedPhoto.longitude)
      return { ...prev }
    })
  }, [props])
  console.log(viewport)
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
            <img className="pinDrop" src={Pin}></img>
          </Marker>
        )}
      </ReactMapGL>
    </div>
  )
}
