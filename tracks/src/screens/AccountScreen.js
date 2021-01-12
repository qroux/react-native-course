import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={style.container}>
      <Button title="Disconnect" onPress={signout} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountScreen;
