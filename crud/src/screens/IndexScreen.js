// Import useContext hook
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={value.blogPosts}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Button onPress={() => value.addBlogPost()} title="Add +" />
    </View>
  );
};

export default IndexScreen;
