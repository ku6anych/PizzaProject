import { createSlice } from '@reduxjs/toolkit';
import { pizzaItem } from '../../types';
import { getAllPizzaThunk } from './pizzaThunks';

export interface allPizzaState {
  pizzas: pizzaItem[];
  loading: boolean;
  searchPizza: string;
  categoriesId: number;
  sortId: number;
}

const initialState: allPizzaState = {
  pizzas: [],
  loading: false,
  searchPizza: '',
  categoriesId: 0,
  sortId: 0,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setSearchPizza: (state, { payload }) => {
      state.searchPizza = payload;
    },
    setCategoriesId: (state, { payload }) => {
      state.categoriesId = payload;
    },
    setSortId: (state, { payload }) => {
      state.sortId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPizzaThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPizzaThunk.fulfilled, (state, { payload }) => {
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
    selectSearchPizza: (state) => state.searchPizza,
    selectCategoriesId: (state) => state.categoriesId,
    selectSortId: (state) => state.sortId,
  },
});

export const pizzaReducer = pizzaSlice.reducer;
export const { setCategoriesId, setSortId, setSearchPizza } = pizzaSlice.actions;
export const { selectAllPizzas, selectAllPizzaLoading, selectSearchPizza, selectCategoriesId, selectSortId } =
  pizzaSlice.selectors;
