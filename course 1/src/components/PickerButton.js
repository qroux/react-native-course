import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PickerButton = ({ str, dispatch }) => {
  return (
    <View>
      <TouchableOpacity
        style={[style.button, style.odd, { backgroundColor: str }]}
        onPress={() =>
          dispatch({ type: `CHANGE_${str.toUpperCase()}`, payload: 10 })
        }
      >
        <Text>More {str}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.button, style.even, { backgroundColor: str }]}
        onPress={() =>
          dispatch({ type: `CHANGE_${str.toUpperCase()}`, payload: -10 })
        }
      >
        <Text>Less {str}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    color: "white",
    padding: 15,
  },
  odd: {
    marginTop: 20,
  },
  even: {
    marginBottom: 20,
  },
});

export default PickerButton;
