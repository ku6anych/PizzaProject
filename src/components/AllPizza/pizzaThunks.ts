import { createAsyncThunk } from '@reduxjs/toolkit';
import { pizzaItem } from '../../types';
import { firestore } from '../../controller';
import { collection, getDocs } from 'firebase/firestore';

export const getAllPizzaThunk = createAsyncThunk('getAllPizzaThunk', async () => {
  const collectionRef = collection(firestore, 'allPizzas');
  const querySnapshot = await getDocs(collectionRef);

  const data: pizzaItem[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
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
