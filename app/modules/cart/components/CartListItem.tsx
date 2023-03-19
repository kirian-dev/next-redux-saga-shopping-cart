import { FC } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import styled from 'styled-components';

import { Product } from '@/core/domain/product/Product';
import Image from 'next/image';
import Button from '@/components/ui/button/Button';
import { useCartItem } from '../hooks/useCartItem';
import { handleDragStartForProduct } from '@/common/utils/handleDragStart';
import { useAction } from '@/common/hooks/useAction';

// interface for CartListItemProps
interface CartListItemProps {
	item: Product;
}

// Define the styled components
const ListItem = styled.li`
	display: flex;
	width: 300px;
	margin: 1rem;
	border: 1px solid #f8f8f8;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
		rgba(0, 0, 0, 0.05) 0px 5px 10px;
	padding: 1rem 2rem;
	cursor: grab;

	@media (max-width: 860px) {
		flex-direction: column;
		align-items: center;
		img {
			margin: 0 auto;
		}
	}
	img {
		@media (max-width: 650px) {
			width: 75px;
			height: 75px;
		}
	}
	h3 {
		color: black;
		margin-bottom: 8px;
		text-align: center;
	}
	@media (min-width: 710px) {
		padding: 1rem;
	}
`;

const ItemText = styled.div`
	margin: 0 1rem;
	@media (max-width: 710px) {
		font-size: 12px;
	}
`;

const Quantity = styled.span`
	flex-basis: 20%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonItem = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 14px;
	margin-left: 8px;
	width: 25px;
	height: 25px;

	&:first-child {
		margin-right: 8px;
	}
`;

const ButtonRemove = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 1rem;
`;

// Cart list item component
export const CartListItem: FC<CartListItemProps> = ({ item }) => {
	const { setIsOnDragProducts } = useAction();
	const {
		handleAddQuantity,
		handleRemoveProduct,
		handleRemoveQuantity,
	} = useCartItem();

	// func
	const handleOnDrag = (event: React.DragEvent<HTMLLIElement>) => {
		setIsOnDragProducts(true);
		handleDragStartForProduct(event, item);
	};

	return (
		<ListItem onDragStart={handleOnDrag}>
			<Image
				src={item.image}
				alt={item.title}
				width={125}
				height={125}
				priority
			/>
			<ItemText>
				<h3>{item.title.slice(0, 20)}</h3>
				<h3>${(item.price * (item.quantity || 1)).toFixed(2)}</h3>
				<h3>Quantity: {item.quantity}</h3>
				<Quantity>
					<ButtonItem onClick={() => handleRemoveQuantity(item)}>
						<AiOutlineMinusCircle />
					</ButtonItem>
					<div>{item.quantity}</div>
					<ButtonItem onClick={() => handleAddQuantity(item)}>
						<AiOutlinePlusCircle />
					</ButtonItem>
				</Quantity>
				<ButtonRemove>
					<Button onClick={() => handleRemoveProduct(item.id)}>Remove</Button>
				</ButtonRemove>
			</ItemText>
		</ListItem>
	);
};
