// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

import { Map } from "../components/Map";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { TrackForm } from "../components/TrackForm";

const TrackCreateScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={style.container}>
      {/* <Text style={style.header}>New Track</Text> */}
      <Map />
      {err ? (
        <Text style={{ color: "red", fontWeight: "bold" }}>{err}</Text>
      ) : null}
      <TrackForm />
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
