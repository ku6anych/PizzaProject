import { createSlice } from '@reduxjs/toolkit';

export interface allPizzaState {
  pizzas: [];
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
});
