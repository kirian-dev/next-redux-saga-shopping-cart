import { all } from 'redux-saga/effects'; // Import the 'all' function from the 'redux-saga/effects' module
import productSaga from './sagas/productSaga'; // Import the productSaga generator function

// Define the rootSaga generator function
export function* rootSaga() {
	yield all([productSaga()]); // Use the 'all' function to run the productSaga concurrently with any other sagas
}
