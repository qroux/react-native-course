// Import useContext hook
import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener("focus", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={style.postsContainer}>
                <Text style={style.postTitle}>
                  {item.title} - id: {item.id}
                </Text>

                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome name="trash-o" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
