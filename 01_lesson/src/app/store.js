// start the store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";

// export store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
});
