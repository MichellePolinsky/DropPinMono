import Header from './Header'
import HooksMap from './HooksMap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LocationSearch = props => {
  const [searchTerm, setSearchTerm] = useState('')
  // const [searchResults, setSearchResults] = useState([])
  const [displayPhotos, setDisplayPhotos] = useState([])
  const [searchGeo, setSearchGeo] = useState(null)

  const fetchData = async () => {
    if (searchTerm) {
      const resp = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bdc5966fd5f89fb1632bbc40ef6470d1&tags=${searchTerm}&per_page=7&format=json&nojsoncallback=1`
      )
      console.log(resp.data)
      setDisplayPhotos(resp.data.photos.photo)
    }
  }

  const geoGet = async photoId => {
    const resp = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=bdc5966fd5f89fb1632bbc40ef6470d1&photo_id=${photoId}&format=json&nojsoncallback=1`
    )
    console.log(resp.data, 'geo get')
    setSearchGeo(resp.data.photo.location)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <Header />
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
      <section className="image-cont">
        {displayPhotos.map((photo, i) => {
          return (
            <div key={i}>
              {photo.id}
              <section className="imgs">
                <button className="img-button" onClick={() => geoGet(photo.id)}>
                  <img
                    className="img-items"
                    src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`}
                    alt={''}
                  />
                </button>
              </section>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default LocationSearch
