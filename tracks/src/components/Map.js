import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;
  }

  return (
    <MapView
      style={style.mapContainer}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(0, 122, 255, 1.0)"
        fillColor="rgba(0, 122, 255, 0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const style = StyleSheet.create({
  mapContainer: {
    flex: 0.7,
  },
});
