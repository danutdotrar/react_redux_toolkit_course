// This is where we will create our methods to interact with api
// Replaces smth like axios

// import Create Api and fetchBaseQuery
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create apiSlice
// apiSlice needs a reducerPath with the name, a baseQuery that fetch the baseUrl, and endpoints
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
        }),
    }),
});

export const { useGetTodosQuery } = apiSlice;
