import { NextPage } from 'next';
import { useEffect } from 'react';

import { Landing } from '@/modules/landing';
import { Cart } from '@/modules/cart/Cart';
import { useAction } from '@/common/hooks/useAction';

/**
The HomePage component is a Next.js page that renders the landing and cart modules. 
It also uses the useAction hook to dispatch an action to fetch products from an API.

@return The HomePage component.
 */

const HomePage: NextPage = () => {
	const { getProductsStart } = useAction();
	useEffect(() => {
		getProductsStart();
	}, [getProductsStart]);

	return (
		<main>
			<Landing />
			<Cart />
		</main>
	);
};

export default HomePage;
