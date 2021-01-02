import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Spacing, Colors, Fonts } from "../abstracts/main";

const RestaurantCard = ({ name, img, address }) => {
  return (
    <View style={style.card}>
      <Image source={{ uri: img, height: 100, width: 100 }} />
      <View style={style.contentContainer}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.address}>{address}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    flexGrow: 1,
    margin: Spacing.regular,
    borderColor: Colors.borderLight,
    borderWidth: 1,
    backgroundColor: Colors.bgLight,
    flexDirection: "row",
  },
  contentContainer: {
    padding: Spacing.regular,
  },
  title: {
    fontWeight: "bold",
    fontSize: Fonts.big,
  },
  address: {
    color: Colors.textLight,
  },
});

export default RestaurantCard;
