import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogForm = () => {
  return (
    <View>
      <Text>BlogForm Component</Text>
      <View style={style.field}>
        <Text>Title</Text>
        <TextInput style={style.input} />
      </View>
      <View style={style.field}>
        <Text>Content</Text>
        <TextInput style={style.input} />
      </View>
      <Button title="Save" />
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
