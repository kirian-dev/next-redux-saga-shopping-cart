import { toastr } from 'react-redux-toastr';

import { useAction } from '@/common/hooks/useAction';
import { Product } from '@/core/domain/product/Product';

//This custom hook useProducts, which returns an object containing a function onAddToCart
export const useProducts = () => {
	const { addToCart } = useAction();

	// function takes a Product object as a parameter, performs some validation checks on the product parameter, and calls the addToCart
	const onAddToCart = (product: Product) => {
		if (!product) {
			toastr.error('Error', 'No product selected');
			return;
		}

		if (product.quantity && product.quantity < 0) {
			toastr.error('Error', 'Quantity should be greater than zero');
			return;
		}

		addToCart(product);
		toastr.success('Product', 'was added successfully');
	};

	return { onAddToCart };
};
