import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../abstracts/main";

const SearchBar = ({term, setTerm, searchApi}) => {
  return (
    <View style={style.background}>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        style={style.input}
        onChangeText={(e) => setTerm(e)}
        value={term}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => searchApi(term)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: Colors.bgLight,
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 0,
  },
  input: {
    color: "black",
    height: "100%",
    flex: 1,
    fontSize: 16,
    paddingLeft: 15,
  },
});

export default SearchBar;