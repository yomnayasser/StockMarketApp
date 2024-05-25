import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
