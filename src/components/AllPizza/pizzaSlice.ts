import { createSlice } from '@reduxjs/toolkit';
import { pizzaItem } from '../../types';
import { getAllPizzaThunk } from './pizzaThunks';

export interface allPizzaState {
  pizzas: pizzaItem[];
  loading: boolean;
}

const initialState: allPizzaState = {
  pizzas: [],
  loading: false,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPizzaThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPizzaThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.pizzas = payload;
      })
      .addCase(getAllPizzaThunk.rejected, (state) => {
        state.loading = false;
      });
  },
  selectors: {
    selectAllPizzas: (state) => state.pizzas,
    selectAllPizzaLoading: (state) => state.loading,
  },
});

export const pizzaReducer = pizzaSlice.reducer;
export const { selectAllPizzas, selectAllPizzaLoading } = pizzaSlice.selectors;
