import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [...state, { title: `Article #${state.length}` }];
    case "REMOVE_BLOGPOST":
      const newState = [...state];
      newState.pop();
      return newState;
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_BLOGPOST" });
  };
};

const removeBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "REMOVE_BLOGPOST" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost },
  []
);
