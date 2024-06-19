import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = cartSlice.actions;

export default cartSlice.reducer;
