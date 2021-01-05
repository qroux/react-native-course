import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Article #${state.length}`,
        },
      ];
    case "DELETE_BLOGPOST":
      const newState = [...state];
      newState.splice(action.payload, 1);
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

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
