import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import homeReducer, {initialState as homeInitialState} from './home/home.slice';
import {pokemonApi} from './pokemon/pokemon.api';

const reducer = combineReducers({
  home: homeReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const rootInitialState: Pick<RootState, 'home'> = {
  home: homeInitialState,
};

export const createStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
