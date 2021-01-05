// Import useContext hook
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost, removeBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="Add +" />
      <Button title="Remove -" onPress={removeBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
