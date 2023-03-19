import { GetStaticPaths, NextPage, GetStaticProps } from 'next';

import { Product } from '@/core/domain/product/Product';
import { ProductService } from '@/core/services';
import ProductInfo from '@/modules/productInfo/ProductInfo';
import { useRouter } from 'next/router';

/**
The ProductPageProps interface defines a single property named product of type Product.
@interface
*/

interface ProductPageProps {
	product: Product;
}

/**
The ProductPage component is a Next.js page component that takes the ProductPageProps interface as a parameter and returns a JSX element.
@function
@param {ProductPageProps} props - The props that the component receives.
@returns {JSX.Element} - A JSX element that represents the ProductPage component.
*/

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<ProductInfo product={product} />
		</>
	);
};

/**

The getStaticPaths function is an asynchronous function that returns an object with an array of paths and a fallback option.
@function
@async
@returns {Promise<{paths: object[], fallback: string | boolean}>} - A Promise that resolves to an object with the paths array and the fallback option.
*/

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const data = await ProductService.getAll();
		const paths =
			data &&
			data.map(product => ({
				params: { slug: String(product.id) },
			}));

		return { paths: paths || [], fallback: 'blocking' };
	} catch {
		return {
			paths: [],
			fallback: false,
		};
	}
};

/**

The getStaticProps function is an asynchronous function that returns an object with the props key and its value.
@function
@async
@param {object} context - The context object that contains the parameters of the page.
@returns {Promise<{props: object}>} - A Promise that resolves to an object with the props key and its value.
*/

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.slug as string;
		console.log('id:', id);

		const product = await ProductService.byId(id);

		return {
			props: { product },
		};
	} catch (e) {
		throw e;
	}
};
export default ProductPage;
