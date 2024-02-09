import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    sortName: "популярности",
    sortProp: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },

    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSortType, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
