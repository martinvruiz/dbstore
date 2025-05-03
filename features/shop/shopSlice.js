import { View, Text } from "react-native";
import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      categorySelected: "",
      selectedItem: "",
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.value.categorySelected = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.value.selectedItem = action.payload;
    },
  },
});

export const { setCategorySelected, setSelectedItem } = shopSlice.actions;
export default shopSlice.reducer;
