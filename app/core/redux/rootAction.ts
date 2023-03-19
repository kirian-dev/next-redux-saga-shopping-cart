import { cartActions } from './slices/cartSlice';
import { productsAction } from './slices/productsSlice';

// Combine all the actions from the two slices into a single object
export const allActions = {
	...cartActions, // Spread the actions from the cartSlice into the object
	...productsAction, // Spread the actions from the productsSlice into the object
};
