import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {pokemonApi} from './pokemon/pokemon.api';
import {pokemonAxiosApi} from './pokemonAxios/pokemonAxios.api';

const reducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [pokemonAxiosApi.reducerPath]: pokemonAxiosApi.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const rootInitialState: Omit<
  RootState,
  'pokemonApi' | 'pokemonAxiosApi'
> = {};

export const createStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        pokemonApi.middleware,
        pokemonAxiosApi.middleware,
      ),
  });

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
