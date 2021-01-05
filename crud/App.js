import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogProvider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BlogProvider>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={IndexScreen} />
        </Stack.Navigator>
      </BlogProvider>
    </NavigationContainer>
  );
};

export default App;
