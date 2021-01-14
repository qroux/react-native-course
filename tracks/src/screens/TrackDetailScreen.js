import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route }) => {
  const trackId = route.params.trackId;
  const {
    state: { tracks },
  } = useContext(TrackContext);
  const track = tracks.find((t) => t._id === trackId);
  const initialCoords = track.locations[0].coords;

  return (
    <View style={style.container}>
      <Text style={style.header}>{track.name}</Text>
      <MapView
        style={style.mapContainer}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Polyline
          coordinates={track.locations.map((location) => location.coords)}
        />
      </MapView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  mapContainer: {
    height: 300,
  },
});

export default TrackDetailScreen;
