import React, { useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { Context as AuthContext } from "../context/AuthContext";

import { LogForm } from "../components/LogForm";
import { Colors } from "../assets/main";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { state, signup, clearError } = useContext(AuthContext);

  return (
    <View style={style.screenContainer}>
      <View>
        <Text style={style.title}>Welcome to Tracker</Text>
        <View style={style.subTitleContainer}>
          <Text style={style.subTitle}>Create an Account</Text>
        </View>
      </View>

      <LogForm submit={signup} btnTitle="Register" />

      <View style={style.footerContainer}>
        <Text style={{ color: Colors.lightGrey }}>Already registered ?</Text>
        <Button
          title="Log in"
          titleStyle={{ fontSize: 20 }}
          type="clear"
          onPress={() => {
            clearError();
            navigation.navigate("SignIn");
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    padding: 20,
    height: Dimensions.get("window").height,
    justifyContent: "center",
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

export default SignupScreen;
