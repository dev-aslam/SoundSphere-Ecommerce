import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState: initialUserState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    clearUserCredentials: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export default authUserSlice.reducer;
export const { setUserCredentials, clearUserCredentials } =
  authUserSlice.actions;
