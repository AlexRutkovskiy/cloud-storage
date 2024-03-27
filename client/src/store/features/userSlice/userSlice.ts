import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
