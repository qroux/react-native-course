import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BlogForm = ({ submit, redirect }) => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
          submit(title, content);
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
