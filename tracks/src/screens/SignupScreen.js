import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="sign in"
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SignupScreen;
