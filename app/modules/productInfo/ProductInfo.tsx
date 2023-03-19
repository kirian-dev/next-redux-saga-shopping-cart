import { FC } from 'react';
import styled from 'styled-components';

import { Product } from '@/core/domain/product/Product';
import Button from '@/components/ui/button/Button';
import Link from 'next/link';
import { useProducts } from '@/common/hooks/useProducts';

// interface ProductInfoProps includes product properties
interface ProductInfoProps {
	product: Product;
}

// Define the styled components
const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin: 16px;
`;

const Image = styled.img`
	height: 400px;
	width: 400px;
	margin-right: 32px;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	font-size: 36px;
	margin: 0;
`;

const Category = styled.h3`
	font-size: 24px;
	margin: 8px 0;
`;

const Price = styled.div`
	font-size: 24px;
	margin-bottom: 16px;
`;

const Description = styled.p`
	font-size: 18px;
	margin-bottom: 16px;
`;

const LinkBack = styled.span`
	margin-right: 16px;
`;

// ProductInfo component render details about product
const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
	const { onAddToCart } = useProducts();
	const {
		title,
		price,
		description,
		category,
		image,
	} = product;

	return (
		<Container>
			<Image src={image} alt={title} />
			<Details>
				<Title>{title}</Title>
				<Category>{category}</Category>
				<Price>${price.toFixed(2)}</Price>
				<Description>{description}</Description>
				<div>
					<LinkBack>
						<Link href="/">Go back</Link>
					</LinkBack>
					<Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
				</div>
			</Details>
		</Container>
	);
};

export default ProductInfo;
