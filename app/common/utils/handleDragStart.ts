import { Product } from '@/core/domain/product/Product';

/**
 * A function that handles the drag start event for a product.
 *
 * @param e The drag event object.
 * @param product The product object that is being dragged.
 */

export const handleDragStartForProduct = (
	e: React.DragEvent<HTMLLIElement>,
	product: Product,
) => {
	// Set the data transfer object for the drag event to the JSON representation of the product object
	e.dataTransfer.setData('text/plain', JSON.stringify(product));
	e.dataTransfer.dropEffect = 'move';

};
