import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Cart } from '@/core/domain/cart/Cart';
import { Product } from '@/core/domain/product/Product';

/**
 * The initial state of the cart
 */
const initialState: Cart = {
	items: [],
	total: 0,
	isOpen: false,
};

// Create a slice of the Redux store for the cart
const slice = createSlice({
	// Name of the slice
	name: 'cart',
	// Initial state of the slice
	initialState,
	// Reducers are functions that handle state changes in response to actions
	reducers: {
		// Add a product to the cart
		addToCart: (state, action: PayloadAction<Product>) => {
			// Check if the product is already in the cart
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			);

			if (existingItem) {
				// If the product is already in the cart, increase its quantity
				const newItems = state.items.map(item => {
					if (item.id === existingItem.id) {
						return { ...item, quantity: (item.quantity || 0) + 1 };
					}
					return item;
				});
				const total = (state.total + action.payload.price).toFixed(2);
				return { ...state, items: newItems, total: parseFloat(total) };
			} else {
				// If the product is not in the cart, add it with a quantity of 1
				const total = (state.total + action.payload.price).toFixed(2);
				return {
					...state,
					items: [...state.items, { ...action.payload, quantity: 1 }],
					total: parseFloat(total),
				};
			}
		},
		// Remove one quantity of a product from the cart
		removeQuantity: (state, action: PayloadAction<Product>) => {
			// Check if the product is in the cart
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			);

			if (existingItem && existingItem.quantity && existingItem.quantity > 1) {
				// If the product is in the cart and has a quantity greater than 1, decrease its quantity
				existingItem.quantity -= 1;
				const total = (state.total - action.payload.price).toFixed(2);
				state.total = parseFloat(total);
				if (existingItem.quantity === 0) {
					// If the product's quantity reaches 0, remove it from the cart
					state.items = state.items.filter(
						item => item.id !== action.payload.id
					);
				}
			}
		},
		// Remove a product from the cart
		removeItem: (state, action: PayloadAction<number>) => {
			// Find the index of the product in the cart
			const existingItemIndex = state.items.findIndex(
				item => item.id === action.payload
			);

			if (existingItemIndex >= 0) {
				// If the product is in the cart, remove it
				const existingItem = state.items[existingItemIndex];
				state.items.splice(existingItemIndex, 1);
				const total = (
					state.total -
					existingItem.price * (existingItem.quantity || 1)
				).toFixed(2);
				state.total = parseFloat(total);
			}
		},
		// Toggle the cart button's open state
		toggleCartButton: state => {
			state.isOpen = !state.isOpen;
		},
	},
});

// Export the actions and reducer of the cart slice
export const { actions: cartActions, reducer: cartReducer } = slice;
