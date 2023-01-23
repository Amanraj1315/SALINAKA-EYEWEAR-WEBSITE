import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { items: [], totalAmount: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decrement(state, action) {
      const removeItem = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = removeItem;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions.increment;
export const counterActionsDec = counterSlice.actions.decrement;
export const authActions = authSlice.actions;

export default store;
