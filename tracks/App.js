import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";

import { CreateIcon, ListIcon, AccountIcon } from "./src/components/TabIcons";

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
  <AppStack.Navigator
    tabBarOptions={{
      showIcon: true,
      tabStyle: { justifyContent: "center" },
    }}
  >
    <AppStack.Screen
      name="TrackList"
      component={TrackListScreens}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <ListIcon focused={focused} color={color} />
        ),
        tabBarLabel: ({ color }) => <Text style={{ color }}>Tracks</Text>,
      }}
    />

    <AppStack.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <CreateIcon focused={focused} color={color} />
        ),
        tabBarLabel: ({ color }) => <Text style={{ color }}>New Track</Text>,
      }}
    />

    <AppStack.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <AccountIcon focused={focused} color={color} />
        ),
        tabBarLabel: ({ color }) => <Text style={{ color }}>Account</Text>,
      }}
    />
  </AppStack.Navigator>
);

export default function App() {
  const isLoggedIn = !false;
  const userToken = "";

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthStackScreen /> : <AppStackScreen />}
    </NavigationContainer>
  );
}
