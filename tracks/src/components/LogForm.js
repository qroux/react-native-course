import React, { useContext, useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";

import { Colors } from "../assets/main";

const LogForm = ({ submit, btnTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useContext(AuthContext);

  return (
    <View style={style.container}>
      {state.errorMessage ? (
        <Text style={style.error}>{state.errorMessage}</Text>
      ) : null}

      <View style={style.field}>
        <TextInput
          placeholder="Email"
          style={style.input}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType={"email"}
          type="email"
          value={email}
          onChangeText={(e) => setEmail(e)}
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
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
      </View>

      <Button
        title={btnTitle}
        buttonStyle={{ marginTop: 20 }}
        onPress={() => submit({ email, password })}
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
  error: {
    color: "#ff3636",
    marginBottom: 5,
  },
});

export { LogForm };
