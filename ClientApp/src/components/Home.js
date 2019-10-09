// import Header from './Header'
// import Map from './Map'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const LocationSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('')
//   // const [searchResults, setSearchResults] = useState([])
//   const [displayPhotos, setDisplayPhotos] = useState([])

//   const fetchData = async () => {
//     if (searchTerm) {
//       const resp = await axios.get(
//         `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bdc5966fd5f89fb1632bbc40ef6470d1&tags=${searchTerm}&format=json&nojsoncallback=1`
//       )
//       console.log(resp.data)
//       setDisplayPhotos(resp.data.photos.photo)
//     }
//   }
//   // `https://www.flickr.com/services/rest/?method=flickr.places.find&api_key=bdc5966fd5f89fb1632bbc40ef6470d1&query=${searchTerm}&format=json&nojsoncallback=1`

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <>
//       <div>
//         <Header />
//         <section className="map_container">
//           <div className="location_buttons">
//             <input
//               className="typed"
//               placeholder="Where To?"
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//             ></input>
//             <button className="search" onClick={fetchData}>
//               Go Explore
//             </button>
//           </div>
//         </section>
//         <Map />
//       </div>
//       <section className="image-cont">
//         {displayPhotos.map((photo, i) => {
//           return (
//             <div key={i}>
//               {photo.id}
//               <section className="imgs">
//                 <img
//                   className="img-items"
//                   // src={`https://farm${farm - id}.staticflickr.com/${server -
//                   //   id}/${id}_${secret}.jpg`}
//                   src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`}
//                   alt={''}
//                 />
//               </section>
//             </div>
//           )
//         })}
//       </section>
//     </>
//   )
// }

// export default LocationSearch
