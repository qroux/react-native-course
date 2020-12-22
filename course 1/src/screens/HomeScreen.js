import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
        <Text>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}>
        <Text>Go to Images</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
