import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PhotoPage = () => {
  const [displayPhotos, setDisplayPhotos] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bdc5966fd5f89fb1632bbc40ef6470d1&lat=27.950575&lon=-82.457176&format=json&nojsoncallback=1'
    )
    console.log(resp.data)
    setDisplayPhotos(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <section className="image-cont">
        {displayPhotos.map((displayPhotos, i) => {
          return (
            <div key={i}>
              {displayPhotos}
              <section className="imgs">
                <img className="img-items" src={displayPhotos} alt={''} />
              </section>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default PhotoPage
