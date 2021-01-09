import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const AccountScreen = () => {
  return (
    <View style={style.container}>
      <Text>Account screens</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default AccountScreen;
