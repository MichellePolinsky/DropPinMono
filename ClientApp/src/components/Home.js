import Header from './Header'
import HooksMap from './HooksMap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Login from './Login'

const LocationSearch = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [displayPhotos, setDisplayPhotos] = useState([])
  const [searchGeo, setSearchGeo] = useState({
    latitude: 27.770773,
    longitude: -82.66352
  })
  const fetchData = async () => {
    if (searchTerm) {
      const resp = await axios.get(`/api/Photos/${searchTerm}`)
      console.log(resp.data)
      setDisplayPhotos(resp.data)
    }
  }

  const geoGet = photo => {
    console.log(photo)
    console.log({
      latitude: photo.latitude,
      longitude: photo.longitude
    })
    setSearchGeo({
      latitude: photo.latitude,
      longitude: photo.longitude
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="topOfPage">
        <Header />
        <Login />
        <section className="map_container">
          <div className="location_buttons">
            <input
              className="typed"
              placeholder="Where To?"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            ></input>
            <button className="search" onClick={fetchData}>
              Go Explore
            </button>
          </div>
        </section>
        <HooksMap selectedPhoto={searchGeo} />
      </div>
      <section className="img-container">
        {displayPhotos.map((photo, i) => {
          return (
            <div key={i}>
              <section className="imgs">
                <img
                  onClick={() => geoGet(photo)}
                  className="img-items"
                  src={photo.url}
                  alt={''}
                />
              </section>
            </div>
          )
        })}
      </section>
    </>
  )
}
export default LocationSearch
