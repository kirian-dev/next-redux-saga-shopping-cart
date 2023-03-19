import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

import { Product } from '@/core/domain/product/Product';
import Button from '@/components/ui/button/Button';
import { handleDragStartForProduct } from '@/common/utils/handleDragStart';
import { useAction } from '@/common/hooks/useAction';

//interface for ProductItemProps includes product, addToCart
interface ProductItemProps {
	product: Product;
	onAddToCart: (product: Product) => void;
}

// Define the styled components
const Container = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	border-radius: 20px;
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	transition: all 0.5s;
	cursor: grab;

	&:hover {
		transform: scale(1.05);
		transition: all 0.5s;
	}
`;

const Image = styled.img`
	width: 100%;
	width: 200px;
	height: 200px;
	margin-bottom: 16px;
`;

const Title = styled.h2`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 8px;
`;

const Price = styled.span`
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 16px;
`;
const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
`;
const LinkItem = styled.div`
	padding-right: 16px;
	height: 25px;
`;

// Product list item component
export const ProductItem: FC<ProductItemProps> = ({ product, onAddToCart }) => {
	const { setIsOnDragProducts } = useAction();
	const handleOnDrag = (e: React.DragEvent<HTMLLIElement>) => {
		handleDragStartForProduct(e, product);
		setIsOnDragProducts(false);
	};
	return (
		<Container draggable="true" onDragStart={handleOnDrag}>
			<Image src={product.image} alt={product.title} />
			<Title>{product.title.slice(0, 30)}</Title>
			<Price>${product.price}</Price>
			<ButtonGroup>
				{/** Link on the page about this product */}
				<LinkItem>
					<Link href={`/product/${product.id}`} aria-label="Product Details">
						<FaInfoCircle />
					</Link>
				</LinkItem>
				{/** Button for the add product to cart*/}
				<Button onClick={() => onAddToCart(product)}>Add to cart</Button>
			</ButtonGroup>
		</Container>
	);
};
