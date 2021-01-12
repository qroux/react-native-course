import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

// import * as RootNavigation from "../RootNavigation";

//REDUCER
const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { token: action.payload, errorMessage: "" };
    case "SIGNIN":
      return { token: action.payload, errorMessage: "" };
    case "SIGNOUT":
      return { ...state, token: null };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    case "LOADED":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

// ACTIONS
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem("token", token);

    dispatch({
      type: "SIGNUP",
      payload: token,
    });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: err.response.data,
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem("token", token);

    dispatch({
      type: "SIGNIN",
      payload: token,
    });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: err.response.data.error,
    });
  }
};

const signout = (dispatch) => async () => {
  dispatch({ type: "SIGNOUT" });
  await AsyncStorage.removeItem("token");
};

const clearError = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

//UTILS
const getToken = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGNIN", payload: token });
  }

  dispatch({ type: "LOADED" });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, clearError, getToken },
  { isLoading: true, token: null, errorMessage: "" }
);
