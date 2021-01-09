import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { Colors } from "../assets/main";

const LogForm = ({ submit, btnTitle }) => {
  return (
    <View style={style.container}>
      <View style={style.field}>
        <TextInput
          placeholder="Email"
          style={style.input}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType={"email"}
          type="email"
        />
      </View>

      <View style={style.field}>
        <TextInput
          placeholder="Password"
          style={style.input}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType={"password"}
          secureTextEntry={true}
        />
      </View>

      <Button
        title={btnTitle}
        buttonStyle={{ marginTop: 20 }}
        onPress={() => submit()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  field: {
    marginVertical: 5,
  },
  label: {
    marginBottom: 10,
    color: Colors.grey,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    height: 45,
    padding: 10,
  },
});

export { LogForm };
