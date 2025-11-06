import { createSlice } from "@reduxjs/toolkit";

// ✅ Load saved wishlist from localStorage
const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to load wishlist:", err);
    return [];
  }
};

// ✅ Save wishlist to localStorage whenever it changes
const saveWishlist = (state) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save wishlist:", err);
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadWishlist(), // ← load initial wishlist
  reducers: {
    add: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        saveWishlist(state); // ← save after adding
      }
    },
    remove: (state, action) => {
      const updated = state.filter((item) => item.id !== action.payload);
      saveWishlist(updated); // ← save after removing
      return updated;
    },
    clear: () => {
      saveWishlist([]); // ← clear from storage
      return [];
    },
  },
});

export const { add, remove, clear } = wishlistSlice.actions;
export default wishlistSlice.reducer;
