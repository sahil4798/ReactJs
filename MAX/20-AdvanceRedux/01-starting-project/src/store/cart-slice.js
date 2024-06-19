import { createSlice } from "@reduxjs/toolkit";

// const uiInitialState = {
//   title: "Test Item",
//   price: 6,
//   description: "This is a first product - amazing!",
//   quantity: 0,
//   total: 0,
// };

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    items: [],
    totalQuantity: 0,
  },

  reducers: {
    addToCart(state, action) {
      // state.quantity = state.quantity + 1;
      // state.total = state.total + 6;

      state.totalQuantity++;

      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          title: newItem.title,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeFromCart(state, action) {
      // state.quantity = state.quantity - 1;
      // state.total = state.total - 6;

      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          // state.items.pop(existingItem);
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = uiSlice.actions;

export default uiSlice.reducer;
