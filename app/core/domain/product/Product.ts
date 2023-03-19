/**
 * An interface describing the structure of a product rating.
 */
export interface IRating {
	/**
	 * The average rating for the product.
	 */
	rate: number;

	/**
	 * The number of ratings given for the product.
	 */
	count: number;
}

/**
 * An interface describing the structure of a product.
 */
export interface Product {
	/**
	 * The unique identifier of the product.
	 */
	id: number;

	/**
	 * The title or name of the product.
	 */
	title: string;

	/**
	 * The price of the product.
	 */
	price: number;

	/**
	 * The description or details of the product.
	 */
	description: string;

	/**
	 * The category that the product belongs to.
	 */
	category: string;

	/**
	 * The URL or path to the image of the product.
	 */
	image: string;

	/**
	 * The rating details for the product.
	 */
	rating: IRating[];

	/**
	 * The quantity of the product in the cart. Optional.
	 */
	quantity?: number;
}
