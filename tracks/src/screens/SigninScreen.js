import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { LogForm } from "../components/LogForm";
import { Colors } from "../assets/main";

const SigninScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={style.screenContainer}>
      <View>
        <Text style={style.title}>Tracker</Text>
        <View style={style.subTitleContainer}>
          <Text style={style.subTitle}>Log in to continue to Tracker</Text>
        </View>
      </View>

      <LogForm submit={() => console.log("Logged in")} btnTitle="Log In" />

      <View style={style.footerContainer}>
        <Text style={{ color: Colors.lightGrey }}>No account yet ?</Text>
        <Button
          title="Register"
          titleStyle={{ fontSize: 20 }}
          type="clear"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitleContainer: {
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 30,
    color: Colors.lightGrey,
  },
  footerContainer: {
    marginTop: 20,
    display: "flex",

    alignItems: "center",
  },
});

export default SigninScreen;
