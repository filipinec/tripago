import { useState, useEffect } from "react"
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get(url)
      setData(response.data)
    }
  getData()
  }, [url])

  return { data }
}

export default useFetch