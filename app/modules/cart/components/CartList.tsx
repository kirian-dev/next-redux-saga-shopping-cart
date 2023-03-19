import { FC } from 'react';
import styled from 'styled-components';

import { CartListItem } from './CartListItem';
import { useTypedSelector } from '@/common/hooks/useTypedSelector';

// Styling Heading for empty cart message
const EmptyCartHeading = styled.h2`
	font-size: 24px;
	text-align: center;
	padding: 16px;
`;

// Component that renders the list of items in the cart
export const CartList: FC = () => {
	// Get the cart items from the store
	const cartItems = useTypedSelector(store => store.cart.items);

	// If the cart is not empty, render the list of cart items
	// Otherwise, render an empty cart message
	return (
		<>
			{cartItems.length ? (
				<ul>
					{cartItems.map(item => (
						<CartListItem key={item?.id} item={item} />
					))}
				</ul>
			) : (
				<EmptyCartHeading>Your cart is empty :(</EmptyCartHeading>
			)}
		</>
	);
};
