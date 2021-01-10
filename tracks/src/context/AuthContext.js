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
    default:
      return state;
  }
};

// ACTIONS
const signup = (dispatch) => {
  return async ({ email, password }) => {
    console.log("signup route");
    try {
      const response = await trackerApi.post("/signup", { email, password });
      const { token } = response.data;

      dispatch({ type: "SIGNUP", payload: { email, token, isSignedIn: true } });
    } catch (err) {
      console.log("ici", err);
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    console.log("signin route");

    try {
      const response = await trackerApi.post("/signin", { email, password });
      const { token } = response.data;

      dispatch({ type: "SIGNIN", payload: { email, token, isSignedIn: true } });
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signout = (dispatch) => {
  return () => {
    console.log("Disconnect action");
    dispatch({ type: "SIGNOUT", payload: { isSignedIn: false } });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
