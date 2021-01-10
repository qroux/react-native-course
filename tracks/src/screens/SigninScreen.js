import React, { useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { Context as AuthContext } from "../context/AuthContext";

import { LogForm } from "../components/LogForm";
import { Colors } from "../assets/main";

const SigninScreen = () => {
  const navigation = useNavigation();
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={style.screenContainer}>
      <View>
        <Text style={style.title}>Tracker</Text>
        <View style={style.subTitleContainer}>
          <Text style={style.subTitle}>Log in to continue to Tracker</Text>
        </View>
      </View>

      <LogForm submit={signin} btnTitle="Log In" />

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

export default SigninScreen;
