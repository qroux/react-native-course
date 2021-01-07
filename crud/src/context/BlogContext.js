import createDataContext from "./createDataContext";

import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOGPOSTS":
      return action.payload;
    case "EDIT_BLOGPOST":
      const { id } = action.payload;
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
  return async (title, content, redirect) => {
    const req = await jsonServer.post("/posts", { title, content });

    if (redirect) {
      redirect();
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (title, content, redirect, id) => {
    const req = jsonServer.put(`/posts/${id}`, { title, content });
    dispatch({ type: "EDIT_BLOGPOST", payload: { id, title, content } });
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    const req = await jsonServer.delete(`/posts/${id}`);

    dispatch({ type: "DELETE_BLOGPOST", payload: id });

    // if (redirect) {
    //   redirect();
    // }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
