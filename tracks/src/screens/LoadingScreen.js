import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

const LoadingScreen = () => {
  const { state, getToken } = useContext(AuthContext);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.androidBlue,
  },
});

export default LoadingScreen;
