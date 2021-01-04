import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useResults from "../hooks/useResults";
import { Spacing, Colors } from "../abstracts/main";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    console.log(results)
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar setTerm={setTerm} searchApi={searchApi} term={term} />
      {errorMsg ? <Text style={style.results}>{errorMsg}</Text> : null}
      <Text style={style.results}>{results.length} results</Text>
      <ScrollView>
      <ResultsList results={filterResultsByPrice("€")} title="Cost Effective"  />
      <ResultsList results={filterResultsByPrice("€€")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("€€€")} title="Top quality" />
      </ScrollView>

    </>
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
