import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PhotoPage = () => {
  const [displayPhotos, setDisplayPhotos] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.unsplash.com/photos?page=5&per_page=8&query=',
      {
        // params: { query: term },
        headers: {
          Authorization:
            'Client-ID a43c3e64f885a5c06277e2508ad66961ba50161b989c6c8f2c97cf6634b7eff7'
        }
      }
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
              {displayPhotos.user.first_name}
              <section className="img-items">
                <img
                  className="img-items"
                  src={displayPhotos.urls.small}
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

export default PhotoPage
