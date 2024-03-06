import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import './TripList.css'

export default function TripList() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState(['http://localhost:3000/trips'])

  const apiTrips = useCallback(async () => {
    const response = await axios.get(url)
    setTrips(response.data)
  }, [url]) // Add dependency in useCallback function

  useEffect( () => {
    apiTrips()
  },[apiTrips])  // If I use function (Array or Object result) like a dependency in useEffect must use useCallback function 

 console.log(trips)


  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
        <li key={trip.id}>
          <h3>{trip.title}</h3>
          <p>{trip.price}</p>
        </li>
      ))}
      </ul>
    <div className='filters'>
      <button onClick={()=> setUrl('http://localhost:3000/trips?loc=europe')}>European Trips</button>
      <button onClick={()=> setUrl('http://localhost:3000/trips')}>All Trips</button>
    </div>
    </div>
  )
}
