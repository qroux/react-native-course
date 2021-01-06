import React from "react";
import { View, Text } from "react-native";

import BlogForm from "../components/BlogForm";

const EditScreen = ({ route }) => {
  return (
    <View>
      <Text>Edit Screen- id: {route.params.id}</Text>
      <BlogForm />
    </View>
  );
};

export default EditScreen;
