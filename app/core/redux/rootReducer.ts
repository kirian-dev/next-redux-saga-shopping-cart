import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'; // Import the toastrReducer from the react-redux-toastr library

import { cartReducer } from './slices/cartSlice';
import { productsReducer } from './slices/productsSlice';

// Combine the cartReducer, productsReducer, and toastrReducer into a single root reducer
export const rootReducer = combineReducers({
	cart: cartReducer, // Add the cartReducer under the 'cart' key in the state tree
	products: productsReducer, // Add the productsReducer under the 'products' key in the state tree
	toastr: toastrReducer, // Add the toastrReducer under the 'toastr' key in the state tree
});
