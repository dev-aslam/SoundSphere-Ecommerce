import { configureStore } from "@reduxjs/toolkit";
import authAdminReducer from "../features/authAdminSlice.js";
import authUserReducer from "../features/authUserSlice.js";

const store = configureStore({
  reducer: {
    authAdmin: authAdminReducer,
    authUser: authUserReducer,
  },
});

export default store;
