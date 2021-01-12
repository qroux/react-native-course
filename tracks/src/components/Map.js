import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;
  }

  return (
    <MapView
      style={style.mapContainer}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }}
      //   region={{
      //     ...currentLocation.coords,
      //     latitudeDelta: 0.01,
      //     longitudeDelta: 0.01,
      //   }}
    >
      <Circle
        center={currentLocation.coords}
        radius={120}
        strokeColor="rgba(0, 122, 255, 1.0)"
        fillColor="rgba(0, 122, 255, 0.3)"
      />
      {/* <Polyline coordinates={points} /> */}
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
