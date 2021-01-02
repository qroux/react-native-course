import React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useResults from "../hooks/useResults";
import { Spacing, Colors } from "../abstracts/main";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  return (
    <View>
      <SearchBar setTerm={setTerm} searchApi={searchApi} term={term} />
      {errorMsg ? <Text style={style.results}>{errorMsg}</Text> : null}
      <Text style={style.results}>{results.length} results</Text>

      <ResultsList results={results} />

      <FlatList
        data={results}
        renderItem={() => {
          <Text>test</Text>;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  results: {
    textAlign: "right",
    marginRight: Spacing.regular,
    color: Colors.textLight,
  },
});

export default HomeScreen;
