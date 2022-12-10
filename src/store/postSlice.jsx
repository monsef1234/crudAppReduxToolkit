import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.post = [...state.post, action.payload];
    },
    removePost: (state, action) => {
      state.post = state.post.filter((item) => item.id !== action.payload);
    },
    editPost: (state, action) => {
      const { id, title, desc } = action.payload;
      state.post = state.post.map((item) =>
        item.id === id ? { ...item, title, desc } : item
      );
    },
  },
});
export const { addPost, removePost, editPost } = postSlice.actions;
export default postSlice;
