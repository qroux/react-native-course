import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const TrackCreateScreen = () => {
  return (
    <View style={style.container}>
      <Text>Create a new Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default TrackCreateScreen;
