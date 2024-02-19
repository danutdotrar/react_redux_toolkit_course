// import createSlice
import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
    users: ["john"],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
    },
});

// export both actions and full reducer
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
