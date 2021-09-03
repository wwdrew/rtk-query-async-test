import {createApi, BaseQueryFn} from '@reduxjs/toolkit/query/react';
import axios, {AxiosRequestConfig, AxiosError} from 'axios';

const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: ''},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data}) => {
    try {
      const result = await axios({url: baseUrl + url, method, data});
      return {data: result.data};
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {status: err.response?.status, data: err.response?.data},
      };
    }
  };
const BASE_URL = 'https://pokeapi.co/api/v2/';

interface PokemonResponse {
  name: string;
}

export const pokemonAxiosApi = createApi({
  reducerPath: 'pokemonAxiosApi',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['PokemonAxios'],
  endpoints: build => ({
    getPokemon: build.query<PokemonResponse, null>({
      query: () => ({
        url: 'pokemon/ditto',
        method: 'get',
      }),
    }),
  }),
});

export const {useGetPokemonQuery} = pokemonAxiosApi;
