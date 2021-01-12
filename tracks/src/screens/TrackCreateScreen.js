import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestPermissionsAsync } from "expo-location";

import { Map } from "../components/Map";

const TrackCreateScreen = () => {
  const [err, setErr] = useState("");

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error(
          "Location permission not granted. Enable location to continue"
        );
      }
    } catch (e) {
      setErr(e.message);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.header}>New Track</Text>
      <Map />
      {err ? (
        <Text style={{ color: "red", fontWeight: "bold" }}>{err}</Text>
      ) : null}
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
