import { AxiosResponse } from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

import { Product } from '@/core/domain/product/Product';
import { productsAction } from '../slices/productsSlice';
import { ProductService } from '@/core/services';

/**
 * Fetches all products and dispatches success/failure actions
 */
function* fetchProducts() {
	try {
		// Call the ProductService.getAll() method to fetch all products
		const response: AxiosResponse<Product[]> = yield call(
			ProductService.getAll
		);
		// Dispatch the success action with the fetched products data
		yield put(
			productsAction.getProductsSuccess((response as unknown) as Product[])
		);
	} catch (error) {
		// If an error occurs, dispatch the failure action with the error message
		// If the error is not an instance of the Error class, throw a new error with a generic message
		if (error instanceof Error) {
			yield put(productsAction.getProductsFailure(error.message));
		} else {
			throw new Error('Unknown error occurred');
		}
	}
}

/**
 * Watches for the 'products/getProductsStart' action and calls the fetchProducts() saga
 */
function* productSaga() {
	yield takeLatest('products/getProductsStart', fetchProducts);
}

export default productSaga;
