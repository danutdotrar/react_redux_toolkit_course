// slice comes from splitting up redux state objects into multiple slices of state
// A slice is a collection of reducer logic and actions for a single feature in an app
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create initial state
const initialState = {
    count: 0,
};

// set counter slice
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    },
});

// export both actions and reducers
export const { increment, decrement, reset, incrementByAmount } =
    counterSlice.actions;

// export the full reducer - counterSlice
export default counterSlice.reducer;
