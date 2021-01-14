import React, { useContext } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import { TrackCard } from "../components/TrackCard";
import { Fontisto } from "@expo/vector-icons";

const TrackListScreen = () => {
  const {
    state: { tracks },
    fetchTracks,
  } = useContext(TrackContext);

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>Recorded Tracks</Text>
        <Text style={style.title}>
          {tracks ? tracks.length : 0}{" "}
          <Fontisto name="map" size={24} color="black" />
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{ marginBottom: 30 }}
        data={tracks}
        keyExtractor={(track) => track._id}
        renderItem={({ item }) => {
          return <TrackCard name={item.name} trackId={item._id} />;
        }}
      />
      <Button title="Refresh" onPress={fetchTracks} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default TrackListScreen;
