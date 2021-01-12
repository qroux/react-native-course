import "../_mockLocation";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

import { Map } from "../components/Map";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const navigation = useNavigation();
  const [err] = useLocation(addLocation);

  // useEffect(() => {
  //   const leaving = navigation.addListener("blur", () => {
  //     console.log("Leaving Page");
  //   });
  // }, []);

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
