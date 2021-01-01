import React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import yelp from '../api/yelp'

import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const [ term, setTerm ] = useState('')
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


  return (
    <View>
      <SearchBar setTerm={setTerm} searchApi={searchApi} term={term} />
      { errorMsg ? <Text>{errorMsg}</Text>: null}
      <Text>{results.length} results</Text>
      
      <FlatList
        data={results}
       
        renderItem={() => {
          <Text>test</Text>
        }}
      />
    </View>
  );
};

export default HomeScreen;
