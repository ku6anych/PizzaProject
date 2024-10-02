import { app } from './fireBase';
import { getFirestore, collection } from 'firebase/firestore';

export const firestore = getFirestore(app);

export const allPizzasCollection = collection(firestore, 'allPizzas');
