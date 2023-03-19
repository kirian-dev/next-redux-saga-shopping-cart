/**
 * The URL of the store app API.
 * @type {string}
 */
export const API_STORE_URL = process.env.STORE_APP_URL;

/**
 * Generates a URL for retrieving products from the store app API.
 * @param {string} string - The additional string to append to the URL. Optional.
 * @returns {string} The URL for retrieving products.
 */
export const getProductsUrl = (string?: string): string => {
	// If a string is provided, append it to the products endpoint URL.
	// Otherwise, return the default URL for retrieving all products.
	return string ? `/products${string}` : '/products';
};
