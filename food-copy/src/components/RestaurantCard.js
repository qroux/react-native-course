import React from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Spacing, Colors, Fonts } from "../abstracts/main";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import spacing from "../abstracts/_spacing";

import ShowScreen from '../screens/ShowScreen'


const RestaurantCard = ({ name, img, address, rating, reviews }) => {
  return (

      <View style={style.card}>
      <Image source={{ uri: img, height: 100, width: 270 }} style={style.image}/>
      <View style={style.contentContainer}>
        <Text style={style.title}>{name} - {reviews} <Ionicons name="person" size={Fonts.small} color="black" /> | {rating} <AntDesign name="staro" size={Fonts.small} color="black" /></Text>
        <Text style={style.address}>{address}</Text>
      </View>
    </View>


  );
};

const style = StyleSheet.create({
  card: {
    margin: Spacing.regular,
    borderColor: Colors.borderLight,
    borderWidth: 1,
    backgroundColor: Colors.bgLight,

  },
  contentContainer: {
    padding: Spacing.regular
  },
  image: {
    borderRadius: 2

  },
  title: {
    fontWeight: "bold",
    fontSize: Fonts.small,
  },
  address: {
    color: Colors.textLight,
  },
});

export default RestaurantCard;
