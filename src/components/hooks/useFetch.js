import { useState, useEffect } from "react"
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    
    const getData = async() => {
      setIsPending(true) // Add Loading

      const response = await axios.get(url)
      setIsPending(false) // Remove Loading
      setData(response.data)
      
    }
  getData()
  }, [url])

  return { data, isPending }
}

export default useFetch