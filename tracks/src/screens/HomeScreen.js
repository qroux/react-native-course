import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import trackerServer from "../api/trackerServer";

const HomeScreen = () => {
  const [msg, setMsg] = useState("vide");

  useEffect(() => {
    const getMsg = async () => {
      try {
        const res = await trackerServer.get("/");
        setMsg(JSON.stringify(res));
      } catch (err) {
        setMsg(JSON.stringify(err));
      }
    };
    getMsg();
  }, []);
  return (
    <View>
      <Text>Home screen</Text>
      <Text>{msg}</Text>
    </View>
  );
};

export default HomeScreen;
