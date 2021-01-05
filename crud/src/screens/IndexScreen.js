// Import useContext hook
import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="Add +" />
      <Button title="Delete -" onPress={deleteBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return (
            <View style={style.postsContainer}>
              <Text style={style.postTitle}>
                {item.title}, id: {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome name="trash-o" size={25} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  postsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    marginVertical: 5,
    padding: 25,
  },
  postTitle: {
    fontWeight: "bold",
  },
});

export default IndexScreen;
