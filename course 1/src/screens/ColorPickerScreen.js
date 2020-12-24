import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import PickerButton from "../components/PickerButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_RED":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? { ...state }
        : { ...state, red: state.red + action.payload };
    case "CHANGE_GREEN":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? { ...state }
        : { ...state, green: state.green + action.payload };
    case "CHANGE_BLUE":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? { ...state }
        : { ...state, blue: state.blue + action.payload };
    default:
      return { ...state };
  }
};

const ColorPickerScreen = () => {
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
