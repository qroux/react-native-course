import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Map } from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.header}>New Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default TrackCreateScreen;
