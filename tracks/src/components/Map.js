import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export const Map = () => {
  return (
    <MapView
      style={style.mapContainer}
      initialRegion={{
        latitude: 43.2871991,
        longitude: 5.3641216,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }}
    />
  );
};

const style = StyleSheet.create({
  mapContainer: {
    borderWidth: 1,
    borderColor: "black",
    flex: 0.7,
  },
});
