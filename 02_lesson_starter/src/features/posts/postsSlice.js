// Slice is where we divide our state | Slice-ul este locul unde impartim state-ul nostru
// A slice is a collection of logic and actions for a single feature of the app
// Slice este o colectie de logica si actiuni pentru un singur feature al aplicatiei

// import createSlice
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

// create initial state
const initialState = [
    {
        id: 1,
        title: "Learning Redux Toolkit",
        content: "Great state management stuff",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: 2,
        title: "Slices",
        content: "(Pizza) slices are great!",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
];

// create Slice
// inisde createSlice we can mutate the state thanks to Immer.js that works under the hood
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload); // the payload will be the form data
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                    },
                };
            },
        },
    },
});

// select all posts from slice for export
export const selectAllPosts = (state) => state.posts;

// export both actions and reducer
export const { postAdded } = postsSlice.actions;

// export the full slice reducer
export default postsSlice.reducer;
