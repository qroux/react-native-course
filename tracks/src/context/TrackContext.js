import createDataContext from "./createDataContext";

//REDUCER
const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//actions
const fetchTracks = (dispatch) => async () => {};
const createTrack = (dispatch) => async () => {};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
