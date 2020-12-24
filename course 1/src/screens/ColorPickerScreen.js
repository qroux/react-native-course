import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import PickerButton from "../components/PickerButton";

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? { ...state }
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? { ...state }
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? { ...state }
        : { ...state, blue: state.blue + action.amount };
    default:
      return { ...state };
  }
};

const ColorPickerScreen = () => {
  // const [red, setRed] = useState(0)
  // const [green, setGreen] = useState(0)
  // const [blue, setBlue] = useState(0)

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View style={{ flex: 1 }}>
      <Text>Color Picker</Text>
      <PickerButton str="red" dispatch={dispatch} />
      <PickerButton str="green" dispatch={dispatch} />
      <PickerButton str="blue" dispatch={dispatch} />
      <View style={style.colorsContainer}>
        <View
          style={[
            style.square,
            {
              backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
            },
          ]}
        ></View>
        <Text>{`${state.red}, ${state.green}, ${state.blue}`}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  colorsContainer: {
    paddingVertical: 30,
    height: 200,
    borderColor: "rgba(212, 212, 212, 0.5)",
    borderWidth: 0.7,
  },
  square: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    borderColor: "rgba(212, 212, 212, 0.5)",
    borderWidth: 0.5,
  },
});

export default ColorPickerScreen;
