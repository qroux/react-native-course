import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import { Colors } from "../assets/main";

export const TrackForm = () => {
  const {
    state: { name, recording, locations },
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
      <View style={style.buttonContainer}>
        {recording ? (
          <Button
            title="Stop Recording"
            onPress={stopRecording}
            buttonStyle={{ backgroundColor: "red", width: 150 }}
          />
        ) : (
          <Button
            title="Start Recording"
            onPress={startRecording}
            buttonStyle={{ width: 150 }}
          />
        )}
        <Button
          title="Save"
          onPress={startRecording}
          disabled={locations.length <= 0}
          buttonStyle={{ width: 150, backgroundColor: "grey" }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingVertical: 25,
  },
  field: {
    backgroundColor: "white",
    width: "80%",
    height: 55,
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
