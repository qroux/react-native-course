import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

//REDUCER
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// ACTIONS
const signup = (dispatch) => {
  return async ({ email, password }) => {
    console.log("signup route");
    try {
      const res = await trackerApi.post("/signup", { email, password });
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }

    dispatch({ email, password });
  };
};

const signin = (dispatch) => {
  return () => {
    dispatch({ email, password });
  };
};

const signout = (dispatch) => {
  return () => {
    dispatch();
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
