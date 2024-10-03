import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default { actions: filtersSlice.actions, reducer: filtersSlice.reducer };
