import React, { useContext } from "react";
import { View, Text } from "react-native";

import { Context } from "../context/BlogContext";

import Blogform from "../components/BlogForm";

const CreateScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Create Screen</Text>
      <Blogform submit={addBlogPost} redirect="Index" />
    </View>
  );
};

export default CreateScreen;
