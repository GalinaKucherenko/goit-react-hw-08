import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        text: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const selectTextFilter = (state) => state.filters.text;

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;