import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userComments: localStorage.getItem("comments")
    ? JSON.parse(localStorage.getItem("comments"))
    : [],
};
export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    AddToComments: (state, action) => {
      let comment = action.payload
      state.userComments.push(comment);
      localStorage.setItem("comments", JSON.stringify(state.userComments));
    },
    RemoveFromComments: (state, action) => {
        const filterItems = state.userComments.filter(item=>item.id!==action.payload.id);
        state.userComments = filterItems;
        localStorage.setItem("comments", JSON.stringify(state.userComments));
        return state;
      },
  },
});

// Action creators are generated for each case reducer function
export const { AddToComments,RemoveFromComments } = commentSlice.actions;

export default commentSlice.reducer;
