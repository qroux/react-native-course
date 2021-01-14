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
  try {
    await trackerApi.post("/tracks", { name, locations });
  } catch (err) {
    console.log(err.message);
  }
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
