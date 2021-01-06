import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state } = useContext(Context);

  const blogPost = state.find((post) => post.id === route.params.id);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>
          {blogPost.title} - {route.params.id}
        </Text>
      </View>

      <Text style={style.content}>{blogPost.content || "empty"}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 25,
  },
  header: {
    borderBottomColor: "#cecece",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    paddingVertical: 25,
  },
});

export default ShowScreen;
