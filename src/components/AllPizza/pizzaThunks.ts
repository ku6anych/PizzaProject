import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { pizzaItem } from '../../types.ts';

export const getAllPizzaThunk = createAsyncThunk<pizzaItem[], void>('getAllPizzaThunk', async () => {
  const pizzasResponse = await axiosApi.get('/allPizzas.json');
  const pizzas = pizzasResponse.data;
  let newPizzas: pizzaItem[] = [];
  if (pizzas) {
    newPizzas = Object.keys(pizzas).map((id: string) => {
      const pizza = pizzas[id];
      return {
        id,
        ...pizza,
      };
    });
  }
  return newPizzas;
});
