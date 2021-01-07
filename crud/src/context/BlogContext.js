import createDataContext from "./createDataContext";

import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOGPOSTS":
      return action.payload;
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999).toString(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "EDIT_BLOGPOST":
      const { id, title, content } = action.payload;
      return [...state].map((post) => {
        if (post.id === id) {
          return action.payload;
        } else {
          return post;
        }
      });
    case "DELETE_BLOGPOST":
      return [...state].filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get("/posts");
    dispatch({ type: "GET_BLOGPOSTS", payload: res.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
  };
};

const editBlogPost = (dispatch) => {
  return (title, content, id) => {
    dispatch({ type: "EDIT_BLOGPOST", payload: { id, title, content } });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
