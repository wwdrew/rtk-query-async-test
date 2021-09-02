import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://pokeapi.co/api/v2/';

interface PokemonResponse {}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Pokemon'],
  endpoints: build => ({
    getPokemon: build.query<PokemonResponse, null>({
      query: () => ({
        url: 'pokemon/1',
      }),
    }),
  }),
});

export const {useGetPokemonQuery} = pokemonApi;
