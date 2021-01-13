import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";

export const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [title, setTitle] = useState("");

  return (
    <View style={style.container}>
      <TextInput
        style={style.field}
        value={name}
        onChangeText={setTitle}
        placeholder="Track Title"
      />
      {recording ? (
        <Button
          title="Stop Recording"
          onPress={stopRecording}
          buttonStyle={{ backgroundColor: "red" }}
        />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: "center",
  },
  field: {
    backgroundColor: "white",
    width: "95%",
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
});
