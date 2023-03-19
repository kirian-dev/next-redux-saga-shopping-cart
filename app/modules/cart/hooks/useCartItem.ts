// Importing the `toastr` module from 'react-redux-toastr', the `Product` domain object, and the `useAction` hook
import { toastr } from 'react-redux-toastr';

import { Product } from '../../../core/domain/product/Product';
import { useAction } from '@/common/hooks/useAction';

// Defining a custom hook `useCartItem` for handling cart items
export const useCartItem = () => {
	// Using the `useAction` hook to access `addToCart`, `removeQuantity`, and `removeItem` functions from the Redux store
	const { addToCart, removeQuantity, removeItem } = useAction();

	// Handler function for adding product quantity
	const handleAddQuantity = (product: Product) => {
		// If no product is selected, display an error message using the `toastr` module and return
		if (!product) {
			toastr.error('Error', 'No product selected');
			return;
		}
		// Otherwise, add the product to the cart using the `addToCart` function
		addToCart(product);
	};

	// Handler function for removing product quantity
	const handleRemoveQuantity = (product: Product) => {
		// If no product is selected, display an error message using the `toastr` module and return
		if (!product) {
			toastr.error('Error', 'No product selected');
			return;
		}
		// Otherwise, remove the product from the cart using the `removeQuantity` function
		removeQuantity(product);
	};

	// Handler function for removing a product from the cart
	const handleRemoveProduct = (productId: number) => {
		// Remove the product with the specified ID from the cart using the `removeItem` function
		removeItem(productId);
		// Display a success message using the `toastr` module
		toastr.success('Product', 'was removed successfully');
	};

	// Return an object containing the handler functions
	return {
		handleAddQuantity,
		handleRemoveQuantity,
		handleRemoveProduct,
	};
};
