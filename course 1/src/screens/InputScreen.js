import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InputScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Input screen</Text>
      <Text>Your name is: {name}</Text>
      <TextInput
        style={style.input}
        onChangeText={(e) => setName(e)}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
});

export default InputScreen;
