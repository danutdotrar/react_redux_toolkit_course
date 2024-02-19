// Slice is where we divide our state | Slice-ul este locul unde impartim state-ul nostru
// A slice is a collection of logic and actions for a single feature of the app
// Slice este o colectie de logica si actiuni pentru un singur feature al aplicatiei

// import createSlice
import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = { post: "" };

// create Slice
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: { addPost: (state) => (state.post += 1) },
});

// export both actions and reducer
export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
