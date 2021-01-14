import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

//REDUCER
const trackReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return { tracks: action.payload };
    default:
      return state;
  }
};

//actions
const fetchTracks = (dispatch) => async () => {
  try {
    const response = await trackerApi.get("/tracks");
    dispatch({ type: "FETCH_TRACKS", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
const createTrack = (dispatch) => async (name, locations) => {
  console.log("DANS CONTEXT =>", name, locations);
  try {
    await trackerApi.post("/tracks", { name, locations });
  } catch (err) {
    console.log(err.message);
  }
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  {}
);
