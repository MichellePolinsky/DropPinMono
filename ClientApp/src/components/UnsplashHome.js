// import Header from './Header'
// import HooksMap from './HooksMap'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const LocationSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('')
//   // const [searchResults, setSearchResults] = useState([])
//   const [displayPhotos, setDisplayPhotos] = useState([])

//   const fetchData = async () => {
//     if (searchTerm) {
//       const resp = await axios.get(
//         'https://api.unsplash.com/photos?page=1&per_page=8&query=',
//         {
//           headers: {
//             Authorization:
//               'Client-ID a43c3e64f885a5c06277e2508ad66961ba50161b989c6c8f2c97cf6634b7eff7'
//           }
//         }
//       )
//       console.log(resp.data)
//       setDisplayPhotos(resp.data)
//     }
//   }

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
//         <HooksMap />
//       </div>
//       <section className="image-cont">
//         {displayPhotos.map((displayPhotos, i) => {
//           return (
//             <div key={i}>
//               {displayPhotos.user.first_name}
//               <section className="imgs">
//                 <img
//                   className="img-items"
//                   src={displayPhotos.urls.small}
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
