import { createAsyncThunk } from '@reduxjs/toolkit';
import { pizzaItem } from '../../types';
import { firestore } from '../../controller';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { RootState } from '../../app/store';
import { PizzaSort } from '../../Constants';

export const getAllPizzaThunk = createAsyncThunk('getAllPizzaThunk', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const collectionRef = collection(firestore, 'allPizzas');

  let q;
  if (state.pizza.categoriesId === 0) {
    q = query(collectionRef, orderBy(PizzaSort[state.pizza.sortId].title, 'asc'));
  } else {
    q = query(collectionRef, where('category', '==', state.pizza.categoriesId), orderBy('price', 'asc'));
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as pizzaItem[];

  // const pizzasResponse = await axiosApi.get('/allPizzas.json');
  // const pizzas = pizzasResponse.data;
  // let newPizzas: pizzaItem[] = [];
  // if (pizzas) {
  //   newPizzas = Object.keys(pizzas).map((id: string) => {
  //     const pizza = pizzas[id];
  //     return {
  //       id,
  //       ...pizza,
  //     };
  //   });
  // }
  // return newPizzas;
});
