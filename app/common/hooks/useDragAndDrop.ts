import { useCallback } from 'react';
import { Product } from '@/core/domain/product/Product';

// Define a type for the function that will handle the drop event
type DropHandler = (product: Product) => void;

/**
 * A hook that returns event handlers for drag and drop operations on a DOM element.
 *
 * @param ref A reference to the DOM element that the drag and drop operations will be performed on.
 * @param onDrop A function that will be called when a drop event occurs on the DOM element.
 *               The function will receive a single argument, which is the product that was dropped.
 * @returns An object containing two event handlers: handleDragOver and handleDrop.
 *          handleDragOver is a function that will be called when a dragOver event occurs on the DOM element.
 *          handleDrop is a function that will be called when a drop event occurs on the DOM element.
 */

const useDragAndDrop = (
	ref: React.RefObject<HTMLElement>,
	onDrop: DropHandler
) => {
	// Define a memoized function to handle the dragOver event
	const handleDragOver = useCallback((e: React.DragEvent<HTMLUListElement>) => {
		e.preventDefault(); // Prevent the default dragOver behavior
	}, []);

	// Define a memoized function to handle the drop event
	const handleDrop = useCallback(
		(e: React.DragEvent<HTMLUListElement>) => {
			e.preventDefault(); // Prevent the default drop behavior
			e.stopPropagation();
			const data = e.dataTransfer.getData('text/plain');
			const product = JSON.parse(data) as Product;

			// Check if the dropped element is inside the cart area
			if (ref.current && ref.current.contains(e.target as HTMLElement)) {
				onDrop(product); // Call the onDrop function with the dropped product
			}
		},
		[onDrop, ref]
	);

	// Return the memoized event handlers as an object
	return { handleDragOver, handleDrop };
};

export default useDragAndDrop;
