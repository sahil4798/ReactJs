import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleHandler(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const store = createStore(counterSlice.reducer);

// const store = configureStore({
//   reducer: { counter: counterSlice.reducer },
// });

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;
