import React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import useResults from '../hooks/useResults'

import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const [ term, setTerm ] = useState('')
  const [searchApi, results, errorMsg] = useResults()

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
