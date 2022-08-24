import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ResumeState } from '../slices/resumeSlice';


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<ResumeState, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = api;
