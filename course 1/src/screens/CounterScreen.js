import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Text>Counter Screen</Text>
      <Text>Counter: {state.counter}</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => dispatch({ type: "INCREMENT" })}
      >
        <Text style={style.text}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => dispatch({ type: "DECREMENT" })}
      >
        <Text style={style.text}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "#1e90ff",
    color: "white",
    marginVertical: 10,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    textTransform: "uppercase",
  },
});

export default CounterScreen;
