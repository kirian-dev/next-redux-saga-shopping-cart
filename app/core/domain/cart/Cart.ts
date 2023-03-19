import { Product } from '../product/Product';

/**
 * An interface describing the structure of a shopping cart.
 */
export interface Cart {
	/**
	 * An array of products in the cart.
	 */
	items: Product[];

	/**
	 * The total price of all items in the cart.
	 */
	total: number;

	/**
	 * A boolean flag indicating whether the cart is currently open or closed.
	 */
	isOpen: boolean;
}
