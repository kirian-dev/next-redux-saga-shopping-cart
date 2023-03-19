import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { allActions } from '@/core/redux';

/**
 * A hook that returns all of the actions from the redux store, bound to the dispatch function.
 * This can be used to easily call actions from within a component.
 *
 * @returns An object containing all of the actions from the redux store, bound to the dispatch function.
 */

export const useAction = () => {
	// Get the dispatch function from the redux store
	const dispatch = useDispatch();

	// Bind all of the actions to the dispatch function, and memoize the result to avoid unnecessary re-renders
	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
