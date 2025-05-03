import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: null,
      token: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user = action.payload;
      state.value.token = action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
