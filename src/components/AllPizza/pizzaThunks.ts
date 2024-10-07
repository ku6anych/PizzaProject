import { createAsyncThunk } from '@reduxjs/toolkit';
import { pizzaItem } from '../../types';
import { firestore } from '../../controller';
import { collection, getDocs, where, query, orderBy } from 'firebase/firestore';
import { RootState } from '../../app/store';

export const getAllPizzaThunk = createAsyncThunk('getAllPizzaThunk', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const collectionRef = collection(firestore, 'allPizzas');

  let q;
  if (state.pizza.categoriesId === 0) {
    // No need for a placeholder, just order by price directly
    q = query(collectionRef, orderBy('rating', 'desc'));
  } else {
    q = query(collectionRef, where('category', '==', state.pizza.categoriesId), orderBy('price', 'asc'));
  }

  //  q = query(collectionRef,
  //   state.pizza.categoriesId == 0 ?
  //     where("category", ">", 0):
  //   where("category", "==", state.pizza.categoriesId),
  // );

  const querySnapshot = await getDocs(q);
  const data: pizzaItem[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(data);
  return data;

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
