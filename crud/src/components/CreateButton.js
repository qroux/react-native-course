import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <AntDesign
        name="plussquareo"
        size={24}
        color="black"
        style={style.headerButton}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  headerButton: {
    marginRight: 25,
  },
});

export default CreateButton;
