import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = [
    { id: 0, name: "Dude Lebowski" },
    { id: 1, name: "Neil Young" },
    { id: 2, name: "Dave Gray" },
];

// create slice
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducer: {},
});

// select all users
export const selectAllUsers = (state) => state.users;

// export both actions and full reducer
export const {} = usersSlice.actions;
export default usersSlice.reducer;
