import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button
        title="sign up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SigninScreen;
