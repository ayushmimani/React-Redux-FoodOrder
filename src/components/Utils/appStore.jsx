import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./CartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartslice,
  },
});

export default appStore;
