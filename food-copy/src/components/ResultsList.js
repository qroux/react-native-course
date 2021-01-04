import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { Spacing, Fonts } from '../abstracts/main'

import RestaurantCard from "../components/RestaurantCard";

const ResultsList = ({ results, title }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <RestaurantCard
              name={item.name}
              img={
                item.image_url ||
                "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              }
              address={item.location.address1}
              rating={item.rating}
              reviews={item.review_count}
            />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
  },
  title: {
    marginHorizontal: Spacing.regular,
    fontWeight: "bold",
    fontSize: Fonts.big
  }
});

export default ResultsList;
