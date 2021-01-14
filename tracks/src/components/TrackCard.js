import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../assets/main";
import { useNavigation } from "@react-navigation/native";

export const TrackCard = ({ name, trackId }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TrackDetail", { trackId })}
    >
      <View style={style.container}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.distance}> X km</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomColor: Colors.borderLight,
    borderBottomWidth: 1,
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 2,
    justifyContent: "space-between",
  },
  title: {
    // fontWeight: "bold",
    fontSize: 16,
  },
  distance: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
