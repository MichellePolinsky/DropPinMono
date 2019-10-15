import React, { useState, useEffect } from 'react'
import Logo from '../Images/Logo.png'
import axios from 'axios'
import Header from './Header'

const PinPage = () => {
  const [displayPinned, setDisplayPinned] = useState([])

  const fetchPins = async () => {
    const resp = await axios.get('/api/FavoritedPhotos')
    console.log(resp.data, 'Pinned')
    setDisplayPinned(resp.data)
  }
  useEffect(() => {
    fetchPins()
  }, [])

  return (
    <>
      <Header />
      <div>
        <section className="pin-container">
          {displayPinned.map((favPin, i) => {
            return (
              <div key={i}>
                <section className="imgs">
                  <img className="pinPics" src={favPin.photos.url} alt={''} />
                </section>
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default PinPage
