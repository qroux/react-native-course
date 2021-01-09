import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { LogForm } from "../components/LogForm";
import { Colors } from "../assets/main";

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={style.screenContainer}>
      <View>
        <Text style={style.title}>Welcome to Tracker</Text>
        <View style={style.subTitleContainer}>
          <Text style={style.subTitle}>Create an Account</Text>
        </View>
      </View>

      <LogForm
        submit={() => console.log("Account Create")}
        btnTitle="Register"
      />

      {/* <View style={style.footerContainer}>
        <Text style={{ color: Colors.lightGrey }}>No account yet ?</Text>
        <Button
          title="Sign up"
          titleStyle={{ fontSize: 20 }}
          type="clear"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        />
      </View> */}
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

export default SignupScreen;
