import { createSlice } from "@reduxjs/toolkit";

const initialAdminState = {
  adminInfo: localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null,
};

const authAdminSlice = createSlice({
  name: "authAdmin",
  initialState: initialAdminState,
  reducers: {
    setAdminCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem("adminInfo", JSON.stringify(action.payload));
    },
    clearAdminCredentials: (state) => {
      state.adminInfo = null;
      localStorage.removeItem("adminInfo");
    },
  },
});

export default authAdminSlice.reducer;
export const { setAdminCredentials, clearAdminCredentials } =
  authAdminSlice.actions;
