// Import useContext hook
import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

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
                  <FontAwesome name="trash-o" size={25} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = () => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <AntDesign name="plussquareo" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
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
