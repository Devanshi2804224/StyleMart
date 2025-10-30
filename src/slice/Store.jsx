import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";        // ✅ remove extra "slice/"
import wishlistReducer from "./Wishlistslice1"; // ✅ remove extra "slice/"

export default configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

