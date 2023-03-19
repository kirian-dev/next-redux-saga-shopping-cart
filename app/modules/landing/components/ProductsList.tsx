import { FC, useRef } from 'react';
import { ProductItem } from './ProductItem';
import { Product } from '@/core/domain/product/Product';

import styled from 'styled-components';
import { useTypedSelector } from '@/common/hooks/useTypedSelector';
import { MainLoader } from '@/components/ui/loader';
import { useAction } from '@/common/hooks/useAction';
import { toastr } from 'react-redux-toastr';
import useDragAndDrop from '@/common/hooks/useDragAndDrop';
import { useProducts } from '@/common/hooks/useProducts';

// Define the styled components
const ProductsGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const ProductsNotFound = styled.div`
	padding-top: 16px;
	font-size: 24px;
`;

// Products List components
export const ProductsList: FC = () => {
	const { onAddToCart } = useProducts();

	const products = useTypedSelector(store => store.products.products);
	const isLoading = useTypedSelector(store => store.products.loading);
	const isOnDragProducts = useTypedSelector(
		store => store.products.isOnDragProducts
	);

	const { removeItem } = useAction();
	const listRef = useRef<HTMLUListElement>(null);

	// callback function to handle removing a product from the cart
	const handleRemoveFromCart = (product: Product) => {
		removeItem(product.id);
		toastr.success('Product', 'was removed successfully');
	};

	// callbacks for the drag and drop functionality
	const { handleDragOver, handleDrop } = useDragAndDrop(
		listRef,
		handleRemoveFromCart
	);

	if (isLoading) {
		// If the products are still loading, show a loading spinner
		return <MainLoader />;
	}

	return (
		<>
			{/* Render the list of products */}
			<ProductsGrid
				ref={listRef}
				onDragOver={isOnDragProducts ? handleDragOver : () => {}}
				onDrop={handleDrop}
				id="productList"
			>
				{products && products.length ? (
					products?.map(product => (
						<ProductItem
							key={product.id}
							product={product}
							onAddToCart={onAddToCart}
						/>
					))
				) : (
					// If there are no products to show, display a message
					<ProductsNotFound>Products not found</ProductsNotFound>
				)}
			</ProductsGrid>
		</>
	);
};
