import React, { useState } from 'react'
import axios from 'axios'

const PhotoForm = () => {
  const [name, setName] = useState('')
  const [Url, setUrl] = useState('')
  const [Location, setLocation] = useState('')
  const [Latitude, setLatitude] = useState('')
  const [Longitude, setLongitude] = useState('')
  const [Tag, setTag] = useState('')
  const [Pinned, setPinned] = useState('')
  const [DateCreated, setDateCreated] = useState('')
  const [Hearts, setHearts] = useState('')

  const submitForm = async e => {
    e.preventDefault()
    // do our post to our API

    const resp = await axios.post('https://localhost:5001/api/Photos', {
      Name: name,
      Url: Url,
      Location: Location,
      Latitude: Latitude,
      Longitude: Longitude,
      Tag: Tag,
      // Pinned: Pinned,
      // DateCreated: DateCreated,
      Hearts: Hearts
    })
    return resp
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Name</label>
        <input
          name="Name"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Url</label>
        <input
          name="Url"
          value={Url}
          placeholder="Url"
          onChange={e => setUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          name="Location"
          value={Location}
          placeholder="Location"
          onChange={e => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label>Latitude</label>
        <input
          name="Latitude"
          value={Latitude}
          placeholder="Latitude"
          onChange={e => setLatitude(e.target.value)}
        />
      </div>
      <div>
        <label>Longitude</label>
        <input
          name="Longitude"
          value={Longitude}
          placeholder="Longitude"
          onChange={e => setLongitude(e.target.value)}
        />
      </div>
      <div>
        <label>Tag</label>
        <input
          name="Tag"
          value={Tag}
          placeholder="Tag"
          onChange={e => setTag(e.target.value)}
        />
      </div>
      {/* <div>
        <label>Pinned</label>
        <input
          name="Pinned"
          value={Pinned}
          placeholder="Pinned"
          onChange={e => setPinned(e.target.value)}
        />
      </div> */}
      {/* <div>
        <label>DateCreated</label>
        <input
          name="DateCreated"
          value={DateCreated}
          onChange={e => setDateCreated(e.target.value)}
        />
      </div> */}
      <div>
        <label>Hearts</label>
        <input
          name="Hearts"
          value={Hearts}
          placeholder="Hearts"
          onChange={e => setHearts(e.target.value)}
        />
        <button onClick={submitForm}>submit photo</button>
      </div>
    </form>
  )
}

export default PhotoForm
