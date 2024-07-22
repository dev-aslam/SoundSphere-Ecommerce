import { configureStore } from "@reduxjs/toolkit";
import authAdminReducer from "../features/authSlice.js";

const store = configureStore({
  reducer: {
    authAdmin: authAdminReducer,
  },
});

export default store;
