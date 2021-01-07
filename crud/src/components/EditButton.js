import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const EditButton = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Edit", { id: route.params.id })}
    >
      <Feather name="edit" size={30} color="black" style={style.headerButton} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  headerButton: {
    marginRight: 25,
  },
});

export default EditButton;
