import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

//REDUCER
const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return action.payload;
    case "SIGNIN":
      return action.payload;
    case "SIGNOUT":
      return action.payload;
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

// ACTIONS
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      const { token } = response.data;
      dispatch({
        type: "SIGNUP",
        payload: { email, token, isSignedIn: true, errorMessage: "" },
      });
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: err.response.data,
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      const { token } = response.data;
      dispatch({
        type: "SIGNIN",
        payload: { email, token, isSignedIn: true, errorMessage: "" },
      });
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: err.response.data.error,
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {
    dispatch({ type: "SIGNOUT", payload: { isSignedIn: false } });
  };
};

const clearError = (dispatch) => {
  return () => {
    dispatch({ type: "CLEAR_ERROR" });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, clearError },
  { isSignedIn: false, errorMessage: "" }
);
