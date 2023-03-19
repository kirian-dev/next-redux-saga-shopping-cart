import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { TypeRootState } from '@/core/redux';

/**
 * A hook that provides typed access to values in the Redux store.
 *
 * @template T The type of the value that will be returned from the selector.
 * @param selector A function that selects the value from the Redux store.
 * @returns The selected value from the Redux store, with type T.
 */

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
