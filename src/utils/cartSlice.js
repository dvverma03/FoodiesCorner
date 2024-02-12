import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state,action) => {
        state.items.pop();
      },
      
    clearCarts: (state) => {
      state.items = []; // Using an empty array to clear the cart
    },
  },
});

export const { addItems, removeItems, clearCarts } = cartSlice.actions;
export default cartSlice.reducer;
