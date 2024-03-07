import { useState, useEffect } from "react"
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    const getData = async() => {
      setIsPending(true) // Add Loading

      try {
        const response = await axios.get(url)
        setData(response.data)
        setError(null)
        setIsPending(false) // Remove Loading
        
      } catch(err) { 
        setError("Could not fetch the data")
        setIsPending(false) // Remove Loading
        console.log(err.response)

      }
      
    }
  getData()
  }, [url])

  return { data, isPending, error }
}

export default useFetch