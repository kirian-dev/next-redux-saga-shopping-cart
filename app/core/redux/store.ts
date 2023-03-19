import { Action, Store, ThunkAction, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

// Define the Redux Persist config
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'], // Only persist the 'cart' reducer
};

export interface SagaStore extends Store {
	sagaTask?: Task;
}
// Create the Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine the root reducer and apply the Redux Persist config
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the combined reducer, Redux Saga middleware, and Redux Persist middleware
const makeStore = () =>
	configureStore({
		reducer: persistedReducer,
		middleware: [sagaMiddleware],
		devTools: true,
	});

export const store = makeStore();

// Run the root saga
(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

//Types Store, State, Dispatch, Thunk
export type TypeRootStore = ReturnType<typeof makeStore>;
export type TypeRootState = ReturnType<TypeRootStore['getState']>;
export type AppDispatch = TypeRootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	TypeRootState,
	unknown,
	Action<string>
>;

// Export the persistor
export const persistor = persistStore(store);
