import { configureStore } from '@reduxjs/toolkit';
import { pizzaReducer } from '../components/AllPizza/pizzaSlice.ts';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;
