// start the store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// export store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
