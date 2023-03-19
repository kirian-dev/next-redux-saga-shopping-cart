import { FC, useRef } from 'react';
import { toastr } from 'react-redux-toastr';
import styled from 'styled-components';

import { CartList } from './components/CartList';
import { useTypedSelector } from '@/common/hooks/useTypedSelector';
import { Product } from '@/core/domain/product/Product';
import { useAction } from '@/common/hooks/useAction';
import useDragAndDrop from '@/common/hooks/useDragAndDrop';

// Define the styled components
const CartContainer = styled.section`
	margin-top: 72px;
	position: fixed;
	right: -100%;
	overflow: scroll;
	top: 0;
	height: 100%;
	background-color: #f1f1f1;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	transition: right 0.5s ease-in-out;

	&.open {
		right: 0;
	}

	::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar-thumb {
		background-color: #c7c7c7;
		border-radius: 5px;
	}
	@media (max-width: 510px) {
		width: 80%;
	}
`;

const CartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem auto;
	@media (max-width: 510px) {
		h2 {
			font-size: 24px;
		}
		h3 {
			font-size: 14px;
		}
	}
`;

const MainHeading = styled.h2`
	font-size: 24px;
	text-align: center;
`;

const TotalHeading = styled.h2`
	font-size: 24px;
	margin-bottom: 48px;
`;

export const Cart: FC = () => {
	const total = useTypedSelector(store => store.cart.total);
	const isOpenCart = useTypedSelector(store => store.cart.isOpen);
	const { addToCart } = useAction();
	const cartRef = useRef<HTMLDivElement>(null);

	//Defining function to handle adding a product to the cart and displaying success message
	const handleAddToCart = (product: Product) => {
		addToCart(product);
		toastr.success('Product', 'was added successfully');
	};

	// Using custom hook to handle drag and drop functionality for adding products to the cart
	const { handleDragOver, handleDrop } = useDragAndDrop(
		cartRef,
		handleAddToCart,
	);

	// Rendering Cart component
	return (
		<>
			<CartContainer
				ref={cartRef}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				className={isOpenCart ? 'open' : ''}
			>
				<CartWrapper>
					<MainHeading>Shopping Cart</MainHeading>
					<CartList />
					<TotalHeading>Total: ${total}</TotalHeading>
				</CartWrapper>
			</CartContainer>
		</>
	);
};
