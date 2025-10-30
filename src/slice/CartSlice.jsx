import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const saveToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state);
    },

    remove(state, action) {
      const updated = state.filter((item) => item.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },

    increment(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
      saveToLocalStorage(state);
    },

    decrement(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveToLocalStorage(state);
    },
  },
});

export const { add, remove, increment, decrement } = CartSlice.actions;
export default CartSlice.reducer;
