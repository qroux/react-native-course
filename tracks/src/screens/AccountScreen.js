import React, { useContext } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return (
    <View style={style.container}>
      <Text>Account screens</Text>
      <Button title="Disconnect" onPress={signout} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default AccountScreen;
