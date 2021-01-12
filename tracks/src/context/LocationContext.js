import createDataContext from "./createDataContext";

// REDUCER
const locationReducer = (state, action) => {
  switch (action.type) {
    case "START_RECORDING":
      return { ...state, recording: true };
    case "STOP_RECORDING":
      return { ...state, recording: false };
    case "ADD_LOCATION":
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};

//ACTIONS
const startRecording = (dispatch) => async () => {
  dispatch({ type: "START_RECORDING" });
};

const stopRecording = (dispatch) => async () => {
  dispatch({ type: "STOP_RECORDING" });
};

const addLocation = (dispatch) => async (location) => {
  dispatch({ type: "ADD_LOCATION", payload: location });
};

//UTILS

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  {
    currentLocation: null,
    locations: [],
    recording: false,
  }
);
