import React, { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Context } from "../context/BlogContext";

const BlogForm = ({ submit, redirect, id }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { state } = useContext(Context);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!route.params) return;

    const post = state.find((post) => post.id === id);
    setTitle(post.title);
    setContent(post.content);
  }, []);

  return (
    <View>
      <Text>BlogForm Component</Text>
      <View style={style.field}>
        <Text>Title</Text>
        <TextInput
          style={style.input}
          onChangeText={(e) => setTitle(e)}
          value={title}
        />
      </View>
      <View style={style.field}>
        <Text>Content</Text>
        <TextInput
          style={style.input}
          onChangeText={(e) => setContent(e)}
          value={content}
        />
      </View>
      <Button
        title="Save"
        onPress={() => {
          submit(title, content, id);
          navigation.navigate(redirect);
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  field: {
    marginVertical: 25,
  },
  input: {
    backgroundColor: "white",
    height: 50,
  },
});

export default BlogForm;
