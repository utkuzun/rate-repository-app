import { useState, useEffect } from 'react'

const useRepositories = (url) => {
  const [loading, setLoading] = useState(false)
  const [repositories, setRepositories] = useState([])

  const fetchRepositories = async () => {
    setLoading(true)

    const response = await fetch(url)
    const json = await response.json()
    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return { loading, repositories, refetch: fetchRepositories }
}

export default useRepositories
