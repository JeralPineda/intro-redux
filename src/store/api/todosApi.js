import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todos',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  // Las funciones a llamar al server
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

// useGetTodosQuery => Query porque es get, si fuera un pos o cualquier otro seria Mutation => useGetTodosMutation
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
