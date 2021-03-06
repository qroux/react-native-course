import createDataContext from "./createDataContext";

// REDUCER
const locationReducer = (state, action) => {
  switch (action.type) {
    case "START_RECORDING":
      return { ...state, recording: true };
    case "STOP_RECORDING":
      return { ...state, recording: false };
    case "ADD_CURRENT_LOCATION":
      return {
        ...state,
        currentLocation: action.payload,
      };
    case "ADD_LOCATION":
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "RESET_LOCATION":
      return { ...state, name: "", locations: [], recording: false };
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

const addLocation = (dispatch) => async (location, recording) => {
  dispatch({ type: "ADD_CURRENT_LOCATION", payload: location });

  if (recording) {
    dispatch({ type: "ADD_LOCATION", payload: location });
  }
};

const changeName = (dispatch) => async (name) => {
  dispatch({ type: "CHANGE_NAME", payload: name });
};

//UTILS
const resetLocation = (dispatch) => async () => {
  dispatch({ type: "RESET_LOCATION" });
};

// EXPORTS

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, resetLocation },
  {
    currentLocation: null,
    locations: [],
    recording: false,
    name: "",
  }
);
