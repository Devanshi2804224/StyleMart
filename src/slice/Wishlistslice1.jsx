import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
  name: "wishlist",
  initialState:[],
  reducers: {
    wishlist: (state, action) => {   // ✅ renamed here
      const exists = state.find(i => i.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    remove: (state, action) => state.filter(i => i.id !== action.payload),
    clear: () => [], // shorter name too
  },
});

export const { wishlist, remove, clear } = wishlistSlice.actions; // ✅ export add, remove, clear
export default wishlistSlice.reducer;
