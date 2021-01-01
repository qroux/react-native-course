import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState("")

    const searchApi = async (searchTerm) => {
        try {
          const response = await yelp.get("/search", {params: {
            limit: 50,
            term: searchTerm,
            location: "marseille"
          }})
    
          setErrorMsg("")
          setResults(response.data.businesses)      
        } catch (err) {
          setErrorMsg("Something went wrong. Try again Later")
        }
    }

    useEffect(() => {
        searchApi("poisson")
      }, [])

      return [searchApi, results, errorMsg]
}


