import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: "",
    lastName: "",
};

const nameSlice = createSlice({
    name: "name",
    initialState,

    reducers: {
        getFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        getLastName: (state, action) => {
            state.lastName = action.payload;
        },
    },
});

export const { getFirstName, getLastName } = nameSlice.actions;
export default nameSlice.reducer;