import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

//REDUCER
const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//actions
const fetchTracks = (dispatch) => async () => {};
const createTrack = (dispatch) => async (name, locations) => {
  console.log("ici", name, locations.length);
  //   trackerApi.post('/')
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
