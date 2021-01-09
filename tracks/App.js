import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";

const AuthStack = createStackNavigator();
const TrackListStack = createStackNavigator();
const AppStack = createBottomTabNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SigninScreen} />
    <AuthStack.Screen name="SignUp" component={SignupScreen} />
  </AuthStack.Navigator>
);

const TrackListScreens = () => (
  <TrackListStack.Navigator>
    <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
    <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </TrackListStack.Navigator>
);

const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="TrackList" component={TrackListScreens} />
    <AppStack.Screen name="TrackCreate" component={TrackCreateScreen} />
    <AppStack.Screen name="Account" component={AccountScreen} />
  </AppStack.Navigator>
);

export default function App() {
  const isLoggedIn = false;
  const userToken = "";

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthStackScreen /> : <AppStackScreen />}
    </NavigationContainer>
  );
}
