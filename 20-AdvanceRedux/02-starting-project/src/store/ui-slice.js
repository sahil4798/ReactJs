import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { showCart: false, notification: null };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
  },
});

export const uiActions = cartSlice.actions;

export default cartSlice.reducer;
