import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface HomeState {
  creditAmount: number;
}

export const initialState: HomeState = {
  creditAmount: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Partial<HomeState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const {update} = homeSlice.actions;

export default homeSlice.reducer;
