import Link from 'next/link';
import { FC } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

import { useTypedSelector } from '@/common/hooks/useTypedSelector';
import { useAction } from '@/common/hooks/useAction';

// Define the styled components
const Container = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 16px;
	z-index: 99;
`;

const StyledLink = styled.p`
	background: linear-gradient(to right, #6a11cb, #2575fc);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-decoration: none;
	font-size: 2rem;
	font-weight: bold;
	cursor: pointer;
`;

const CartButton = styled.button`
	display: flex;
	align-items: center;
	position: relative;
	padding: 0.5rem;
	border: none;
	background-color: transparent;
	cursor: pointer;

	svg {
		margin-right: 0.5rem;
	}
`;

const CartItems = styled.div`
	position: absolute;
	display: block;
	bottom: 0;
	right: 10%;
	padding: 3px 5px;
	border-radius: 100%;
	background-color: red;
	font-size: 12px;
	color: white;
`;

// Define the Header component
export const Header: FC = () => {
	// Get the cart items from the store
	const cartitems = useTypedSelector(store => store.cart.items);

	// Get the toggleCartButton action creator from the store
	const { toggleCartButton } = useAction();

	return (
		<Container>
			<StyledLink>
				<Link href="/">KIT Store</Link>
			</StyledLink>
			<CartButton onClick={() => toggleCartButton()}>
				<FaShoppingCart size={24} />
				{/* Show the number of items in the cart */}
				<CartItems>{cartitems.length}</CartItems>
			</CartButton>
		</Container>
	);
};
