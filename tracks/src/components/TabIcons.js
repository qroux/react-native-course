import React from "react";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const ListIcon = ({ focused, color }) => {
  return <Feather name="list" size={24} color={color} />;
};

const CreateIcon = ({ focused, color }) => {
  return <AntDesign name="plus" size={24} color={color} />;
};

const AccountIcon = ({ focused, color }) => {
  return <MaterialCommunityIcons name="account" size={24} color={color} />;
};

export { ListIcon, CreateIcon, AccountIcon };
