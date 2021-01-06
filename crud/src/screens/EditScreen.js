import React, { useContext } from "react";
import { View, Text } from "react-native";

import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ route }) => {
  const { state, editBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Edit Screen- id: {route.params.id}</Text>
      <BlogForm submit={editBlogPost} redirect="Index" />
    </View>
  );
};

export default EditScreen;
