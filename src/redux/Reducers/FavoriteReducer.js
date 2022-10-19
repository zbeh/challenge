import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteItems: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
};
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    AddToFavorite: (state, action) => {
      let item = { ...action.payload };
      state.favoriteItems.push(item);
      localStorage.setItem("items", JSON.stringify(state.favoriteItems));
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToFavorite,RemoveFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
