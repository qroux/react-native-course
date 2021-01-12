import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 43.2871991 + i * 0.001,
      longitude: 5.3641216 + i * 0.001,
    });
  }

  return (
    <MapView
      style={style.mapContainer}
      initialRegion={{
        latitude: 43.2871991,
        longitude: 5.3641216,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const style = StyleSheet.create({
  mapContainer: {
    borderWidth: 1,
    borderColor: "black",
    flex: 0.7,
  },
});
