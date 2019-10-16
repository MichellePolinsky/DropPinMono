import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import HooksMap from './HooksMap'
import axios from 'axios'
import Login from './Login'
import UnsplashHome from './UnsplashHome'

const LocationSearch = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [displayPhotos, setDisplayPhotos] = useState([])
  const [searchGeo, setSearchGeo] = useState({
    latitude: 27.770773,
    longitude: -82.66352
  })
  const [pins, setPins] = useState([])
  const [trans, setTrans] = useState([])

  const fetchData = async () => {
    if (searchTerm) {
      const resp = await axios.get(`/api/Photos/${searchTerm}`)
      console.log(resp.data)
      setDisplayPhotos(resp.data)
    }
  }

  const transferData = async () => {
    axios.get('/api/Photos').then(resp => {
      resp.data.forEach(photo => {
        axios
          .post('https://droppinhero.herokuapp.com/api/Photos', photo)
          .then(resp => {
            console.log(resp)
          })
      })
    })
  }

  const geoGet = async photo => {
    console.log(photo)
    console.log({
      latitude: photo.latitude,
      longitude: photo.longitude
    })
    setSearchGeo({
      latitude: photo.latitude,
      longitude: photo.longitude
    })
    const resp = await axios.post('/api/favoritedPhotos', {
      photosId: photo.id
      // UID: "wtCXw0bEjXhm6hk03rXf6qGHcKP2"
    })
    console.log(pins)
  }
  // API to the POST

  const postPins = async () => {}

  useEffect(() => {
    fetchData()

    // postPins()
  }, [])

  return (
    <>
      <div className="topOfPage">
        <Header />
        <Login />
        <section className="map_container">
          <div className="location_buttons">
            {/* <button onClick={transferData}>do the thing</button> */}
            <input
              className="typed"
              placeholder="Where To?"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            ></input>
            <button className="search" onClick={fetchData}>
              Go Explore
            </button>
            <Link className="search" to="/PinPage">
              <button className="pin-button">Pins</button>
            </Link>
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
        <UnsplashHome />
      </section>
    </>
  )
}

export default LocationSearch
