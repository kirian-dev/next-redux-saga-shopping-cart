// Importing a function that returns the URL for fetching products from the API configuration file
import { getProductsUrl } from '@/configs/api.config';

// Importing the http module responsible for making API calls and the Product domain object
import { http } from '../../api/http';
import { Product } from '../../domain/product/Product';

// Defining the ProductService class
export class ProductService {
	// Static method for getting all the products
	public static async getAll(): Promise<Product[] | undefined> {
		try {
			// Making an API call to fetch all products
			const response = await http.get<Product[]>(getProductsUrl());

			// Returning the fetched data
			return response.data;
		} catch (error) {
			throw new Error();
		}
	}

	// Static method for getting a specific product by its ID
	public static async byId(id: string): Promise<Product | undefined> {
		try {
			// Making an API call to fetch a product by ID
			const response = await http.get<Product>(getProductsUrl(`/${id}`));

			// Returning the fetched data
			return response.data;
		} catch (error) {
			throw new Error();
		}
	}
}
