import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartslice.reducer;
export const { addItem, removeItem, clearcart } = cartslice.actions;
