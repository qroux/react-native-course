import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../assets/main";

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
      <View style={style.infoContainer}>
        <View style={[style.iconContainer, style.divider]}>
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={30}
            color={Colors.grey}
          />
          <Text style={style.label}>{track ? null : " - "} km</Text>
        </View>
        <View style={style.iconContainer}>
          <MaterialCommunityIcons
            name="clock-time-four-outline"
            size={30}
            color={Colors.grey}
          />
          <Text style={style.label}>
            {track ? null : " - "}
            min
          </Text>
        </View>
      </View>
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
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 150,
    borderRadius: 5,
    marginVertical: 20,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  label: {
    fontWeight: "bold",
  },
  divider: {
    borderRightColor: Colors.borderLight,
    borderRightWidth: 1,
  },
});

export default TrackDetailScreen;
