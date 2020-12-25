import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import ColorPickerScreen from "./src/screens/ColorPickerScreen";
import InputScreen from "./src/screens/InputScreen";

const navigator = createStackNavigator(
  {
    HomeScreen,
    ListScreen,
    ImageScreen,
    CounterScreen,
    ColorsScreen,
    ColorPickerScreen,
    InputScreen,
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
